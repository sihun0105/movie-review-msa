import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as path from 'path';

@Injectable()
export class MovieActorStorageService {
  private static readonly REQUEST_TIMEOUT_MS = 3000;
  private readonly logger = new Logger(MovieActorStorageService.name);
  private readonly storageDriver = process.env.FILE_STORAGE_DRIVER ?? 'local';
  private readonly s3Bucket = process.env.AWS_S3_BUCKET;
  private readonly s3Region = process.env.AWS_REGION ?? 'ap-northeast-2';
  private readonly s3PublicUrl = process.env.AWS_S3_PUBLIC_URL;
  private readonly s3Client = new S3Client({ region: this.s3Region });
  private readonly pendingMirrors = new Map<number, Promise<string>>();

  async mirrorActor(profileUrl: string, personId: number): Promise<string> {
    if (!profileUrl || !this.isS3Enabled() || this.isStoredActor(profileUrl)) {
      return profileUrl;
    }

    const pending = this.pendingMirrors.get(personId);
    if (pending) {
      const mirroredUrl = await pending;
      return this.isStoredActor(mirroredUrl) ? mirroredUrl : profileUrl;
    }

    const operation = this.uploadActor(profileUrl, personId);
    this.pendingMirrors.set(personId, operation);
    try {
      return await operation;
    } finally {
      if (this.pendingMirrors.get(personId) === operation) {
        this.pendingMirrors.delete(personId);
      }
    }
  }

  private async uploadActor(
    profileUrl: string,
    personId: number,
  ): Promise<string> {
    try {
      const response = await axios.get<ArrayBuffer>(profileUrl, {
        responseType: 'arraybuffer',
        timeout: MovieActorStorageService.REQUEST_TIMEOUT_MS,
      });
      const contentType = this.getContentType(response.headers['content-type']);
      const key = `actors/${personId}${this.getExtension(
        profileUrl,
        contentType,
      )}`;

      const controller = new AbortController();
      const timeout = setTimeout(
        () => controller.abort(),
        MovieActorStorageService.REQUEST_TIMEOUT_MS,
      );
      try {
        await this.s3Client.send(
          new PutObjectCommand({
            Bucket: this.s3Bucket,
            Key: key,
            Body: Buffer.from(response.data),
            ContentType: contentType,
          }),
          { abortSignal: controller.signal },
        );
      } finally {
        clearTimeout(timeout);
      }

      return `${this.getPublicBaseUrl()}/${key}`;
    } catch (error) {
      this.logger.warn(`Failed to mirror actor personId=${personId}: ${error}`);
      return profileUrl;
    }
  }

  private isS3Enabled(): boolean {
    return this.storageDriver === 's3' && Boolean(this.s3Bucket);
  }

  private isStoredActor(profileUrl: string): boolean {
    const bucketBaseUrl = `https://${this.s3Bucket}.s3.${this.s3Region}.amazonaws.com`;
    return [this.getPublicBaseUrl(), bucketBaseUrl].some((baseUrl) =>
      profileUrl.startsWith(`${baseUrl}/actors/`),
    );
  }

  private getPublicBaseUrl(): string {
    return (
      this.s3PublicUrl?.replace(/\/$/, '') ??
      `https://${this.s3Bucket}.s3.${this.s3Region}.amazonaws.com`
    );
  }

  private getContentType(value: unknown): string {
    const contentType = Array.isArray(value) ? value[0] : value;
    return typeof contentType === 'string' && contentType.startsWith('image/')
      ? contentType.split(';')[0]
      : 'image/jpeg';
  }

  private getExtension(profileUrl: string, contentType: string): string {
    const extension = path.extname(new URL(profileUrl).pathname).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
      return extension;
    }
    if (contentType === 'image/png') return '.png';
    if (contentType === 'image/webp') return '.webp';
    return '.jpg';
  }
}
