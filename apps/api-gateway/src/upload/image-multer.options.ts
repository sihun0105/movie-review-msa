import { BadRequestException } from '@nestjs/common';
import * as multer from 'multer';
import * as path from 'path';
import {
  ALLOWED_IMAGE_EXTENSIONS,
  ALLOWED_IMAGE_TYPES,
  IMAGE_FILE_SIZE_LIMIT,
} from './upload.constants';

interface ImageFileIdentity {
  mimetype: string;
  originalname: string;
}

export function isAllowedImageFile(file: ImageFileIdentity): boolean {
  if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) return true;

  const genericMime =
    !file.mimetype || file.mimetype === 'application/octet-stream';
  const extension = path.extname(file.originalname).toLowerCase();
  return genericMime && ALLOWED_IMAGE_EXTENSIONS.includes(extension);
}

export const imageMemoryMulterOptions = {
  storage: multer.memoryStorage(),
  limits: { fileSize: IMAGE_FILE_SIZE_LIMIT },
  fileFilter: (req, file, cb) => {
    if (isAllowedImageFile(file)) {
      cb(null, true);
      return;
    }
    cb(new BadRequestException('지원되지 않는 파일 형식입니다.'));
  },
};
