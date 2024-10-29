import { Request, Response, NextFunction } from 'express';

const pathEdit = (req: Request, res: Response, next: NextFunction): void => {
    if (req.file) {
        req.body.pathTemp = req.file.path;
        req.file.path = req.file.path.replace('public', '').replace(/\\/g, '/');
    }
    next();
};

export default pathEdit;