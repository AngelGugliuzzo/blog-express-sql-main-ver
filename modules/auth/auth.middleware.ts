import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../logger/logger';

const secret = process.env.SECRET_JWT || 'DefaultPassword';

export const verifyTokenMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.header('Authorization')?.replace('Bearer ', '');

	if (!token) {
		return res.status(403).json({ msg: 'Token no proporcionado' });
	}

	jwt.verify(token, secret, (err: any, decoded: any) => {
		if (err) {
			logger.error(err);
			return res.status(401).json({ msg: 'Token no valido!!' });
		}
		// TODO: agregarlo al request NO ES TAREA
		req.usuario = decoded.usuario;
		next();
	});
};
