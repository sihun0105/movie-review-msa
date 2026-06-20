import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

interface UploadImageParams {
  file?: Express.Multer.File;
  folder: 'articles' | 'profiles';
}

@Injectable()
export class UploadService {
  private readonly storageDriver = process.env.FILE_STORAGE_DRIVER ?? 'local';
  private readonly s3Bucket = process.env.AWS_S3_BUCKET;
  private readonly s3Region = process.env.AWS_REGION ?? 'ap-northeast-2';
  private readonly s3PublicUrl = process.env.AWS_S3_PUBLIC_URL;
  private readonly localUploadPath = process.env.LOCAL_UPLOAD_PATH ?? 'uploads';
  private readonly localPublicPath = process.env.LOCAL_PUBLIC_PATH ?? 'uploads';

  async uploadImage({ file, folder }: UploadImageParams): Promise<string> {
    if (!file) throw new Error('파일이 없습니다.');
    if (this.storageDriver === 's3') return this.uploadToS3(file, folder);
    return this.uploadToLocal(file, folder);
  }

  private async uploadToS3(
    file: Express.Multer.File,
    folder: string,
  ): Promise<string> {
    if (!this.s3Bucket) throw new Error('AWS_S3_BUCKET is not defined');
    const key = `${folder}/${this.createFileName(file.originalname)}`;
    const client = new S3Client({ region: this.s3Region });

    await client.send(
      new PutObjectCommand({
        Bucket: this.s3Bucket,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    return this.s3PublicUrl
      ? `${this.s3PublicUrl.replace(/\/$/, '')}/${key}`
      : `https://${this.s3Bucket}.s3.${this.s3Region}.amazonaws.com/${key}`;
  }

  private async uploadToLocal(
    file: Express.Multer.File,
    folder: string,
  ): Promise<string> {
    const dir = path.join(this.localUploadPath, folder);
    await fs.mkdir(dir, { recursive: true });

    const fileName = this.createFileName(file.originalname);
    await fs.writeFile(path.join(dir, fileName), file.buffer);
    return `/${this.localPublicPath.replace(
      /^\/|\/$/g,
      '',
    )}/${folder}/${fileName}`;
  }

  private createFileName(originalName: string): string {
    const decoded = Buffer.from(originalName, 'latin1').toString('utf8');
    const ext = path.extname(decoded).toLowerCase();
    return `${randomUUID()}${ext}`;
  }
}
