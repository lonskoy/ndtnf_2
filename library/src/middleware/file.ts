import multer, { FileFilterCallback } from 'multer';
import { Request, Express } from 'express';

const storage = multer.diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, './public/books');
  },
  filename(req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    cb(
      null,
      `${new Date().toISOString().replace(/:/g, '-')}-${req.params.id}-${file.originalname}`
    );
  },
});

const allowedTypes = ['application/pdf', 'application/msword', 'text/plain'];

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default multer({
  storage,
  fileFilter,
});