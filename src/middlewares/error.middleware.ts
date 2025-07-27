import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  if (Joi.isError(err)) {
    return res.status(400).json({ error: err.message });
  }

  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
}
