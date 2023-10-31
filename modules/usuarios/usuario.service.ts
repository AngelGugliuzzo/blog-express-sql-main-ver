import { Request, Response } from 'express';
import { Usuarios } from './usuarios.entity';
import { dbcontext } from '../db/dbcontext';
import { IUsuario } from './usuario.interface';
import logger from '../logger/logger';

export const crearUsuario = async (req: Request, res: Response) => {
	try {
		const usuarioRepository = dbcontext.getRepository(Usuarios);

		let usuarioData: IUsuario = req.body;

		// TODO: migrar a la entidad
		usuarioData.email = usuarioData.email.toLowerCase();

		const usuario = await usuarioRepository.create(usuarioData);
		const guardarUsuario = await usuarioRepository.save(usuario);

		res.json({
			msg: `Se creo el usuario con el id: ${guardarUsuario.id}`,
		});
	} catch (error) {
		logger.error(`fallo al crear un usuario ${error}`);
		res.status(500).json({ msg: 'No se pudo crear el usuario' });
	}
};
