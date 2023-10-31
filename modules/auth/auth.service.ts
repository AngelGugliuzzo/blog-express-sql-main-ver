import { Request, Response } from 'express';
import { dbcontext } from '../db/dbcontext';
import { Usuarios } from '../usuarios/usuarios.entity';
import { Ilogin } from './auth.interfaces';
import bcrypt from 'bcrypt';
import logger from '../logger/logger';
import { generarTokenJWT } from './jwt.service';
import { IUsuario } from '../usuarios/usuario.interface';
import { IjwtPayload } from './jwt.interfaces';

export const login = async (req: Request, res: Response) => {
	try {
		const usuarioRepository = dbcontext.getRepository(Usuarios);
		// primero busco al usuario
		let dataRequest: Ilogin = req.body;
		// pasar a min el email usuario
		const buscarUsuario = await usuarioRepository.findOneBy({
			email: dataRequest.email,
		});
		if (!buscarUsuario) {
			throw new Error('Usuario/contraseña incorrecto');
		}
		// comparo las contreseñas y si falla envia error
		const compararPass = await bcrypt.compare(
			dataRequest.pass,
			buscarUsuario.pass
		);
		if (!compararPass) {
			throw new Error('Usuario/contraseña incorrecto');
		}

		// Genero token
		const payload: IjwtPayload = {
			usuario: {
				id: buscarUsuario.id,
				nombre: buscarUsuario.nombre,
				apellido: buscarUsuario.apellido,
				email: buscarUsuario.email,
			},
		};

		const token = generarTokenJWT(payload);

		res.json({
			token: token,
		});
	} catch (error) {
		// implementar logging en modo ERROR
		logger.error(error);
		res.status(401).json({
			msg: 'Usuario/contraseña incorrecto',
		});
	}
};
