import { Request, Response } from 'express';
import { iComentario } from './comentario.interface';
import { dbcontext } from '../db/dbcontext';
import { Comentario } from './comentario.entity';
import { Noticia } from '../noticias/noticia.entity';

export const crearComentario = async (req: Request, res: Response) => {
	try {
		const comentarioRepository = await dbcontext.getRepository(Comentario);
		const data: iComentario = req.body;

		const result = comentarioRepository.create({
			comentario: data.comentario,
			noticia: { id: data.noticiaId },
		});

		console.log(result);
		const saveComenatario = await comentarioRepository.save(result);

		res.json({
			msg: `Se creo correctamente el comentario con id: ${saveComenatario.id}`,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: 'No se pudo crear el comentario' });
	}
};

export const borrarComentario = async (req: Request, res: Response) => {
	try {
		res.json({ msg: 'comentario borrado' });
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo borrar el comentario' });
	}
};
