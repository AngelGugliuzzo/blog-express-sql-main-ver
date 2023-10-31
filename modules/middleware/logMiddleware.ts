import { Request, Response, NextFunction } from 'express';
import logger from '../logger/logger';

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
	logger.debug(`El ip ${req.ip} ingrea a ${req.url} [${req.method}]`);
	next();
}
