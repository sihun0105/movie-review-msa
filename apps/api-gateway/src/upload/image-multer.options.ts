import multer from 'multer';
import { ALLOWED_IMAGE_TYPES, IMAGE_FILE_SIZE_LIMIT } from './upload.constants';

export const imageMemoryMulterOptions = {
  storage: multer.memoryStorage(),
  limits: { fileSize: IMAGE_FILE_SIZE_LIMIT },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(new Error('지원되지 않는 파일 형식입니다.'));
  },
};
