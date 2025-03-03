import multer from 'multer';
import path from 'path';

export const multerOptions = {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
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
