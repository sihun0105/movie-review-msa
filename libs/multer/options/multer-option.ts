import multer from 'multer';
import path from 'path';
import fs from 'fs';

const allowedImageTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/jpg',
  'image/heic',
  'image/heif',
  'image/webp',
];

export const multerOptions = {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const uploadPath = 'uploads/';
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    filename(req, file, cb) {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString(
        'utf8',
      );
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('지원되지 않는 파일 형식입니다.'));
    }
  },
};
