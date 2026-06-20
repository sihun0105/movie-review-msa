import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import path from 'path';

@Injectable()
export class MoviePosterStorageService {
  private readonly logger = new Logger(MoviePosterStorageService.name);
  private readonly storageDriver = process.env.FILE_STORAGE_DRIVER ?? 'local';
  private readonly s3Bucket = process.env.AWS_S3_BUCKET;
  private readonly s3Region = process.env.AWS_REGION ?? 'ap-northeast-2';
  private readonly s3PublicUrl = process.env.AWS_S3_PUBLIC_URL;
  private readonly s3Client = new S3Client({ region: this.s3Region });

  async mirrorPoster(posterUrl: string, movieCd: number): Promise<string> {
    if (!posterUrl || !this.isS3Enabled() || this.isStoredPoster(posterUrl)) {
      return posterUrl;
    }

    try {
      const response = await axios.get<ArrayBuffer>(posterUrl, {
        responseType: 'arraybuffer',
        timeout: 10000,
      });
      const contentType = this.getContentType(response.headers['content-type']);
      const key = `posters/${movieCd}${this.getExtension(
        posterUrl,
        contentType,
      )}`;

      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: this.s3Bucket,
          Key: key,
          Body: Buffer.from(response.data),
          ContentType: contentType,
        }),
      );

      return `${this.getPublicBaseUrl()}/${key}`;
    } catch (error) {
      this.logger.warn(
        `Failed to mirror poster for movieCd=${movieCd}: ${error}`,
      );
      return posterUrl;
    }
  }

  isReadyPoster(posterUrl?: string | null): boolean {
    if (!this.isS3Enabled()) return true;
    return Boolean(posterUrl && this.isStoredPoster(posterUrl));
  }

  private isS3Enabled(): boolean {
    return this.storageDriver === 's3' && Boolean(this.s3Bucket);
  }

  private isStoredPoster(posterUrl: string): boolean {
    const publicBaseUrl = this.getPublicBaseUrl();
    const bucketBaseUrl = `https://${this.s3Bucket}.s3.${this.s3Region}.amazonaws.com`;
    return (
      posterUrl.startsWith(`${publicBaseUrl}/posters/`) ||
      posterUrl.startsWith(`${bucketBaseUrl}/posters/`)
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

  private getExtension(posterUrl: string, contentType: string): string {
    const extension = path.extname(new URL(posterUrl).pathname).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
      return extension;
    }

    if (contentType === 'image/png') return '.png';
    if (contentType === 'image/webp') return '.webp';
    return '.jpg';
  }
}
