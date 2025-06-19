import { Request, Response, NextFunction } from 'express';

type AppError = Error & { status?: number };

export const errorHandler = (
  err: AppError,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[${status}] ${message}`);

  res.status(status).json({
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });

  if (res.headersSent) next(err);
};
