import multer from 'multer';
import path from 'path';
import fs from 'fs';

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
  limits: { fileSize: 60 * 1024 * 1024 },
};
