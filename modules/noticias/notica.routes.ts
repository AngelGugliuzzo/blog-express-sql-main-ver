import express from 'express';
import {
	crearNoticia,
	borrarNoticia,
	actulizarNoticia,
	listarNoticiaByUsuario,
	obtenerNoticia,
} from './noticia.service';
import { verifyTokenMiddleware } from '../auth/auth.middleware';

const noticiasRoutes = express.Router();

// endpoint para crear una noticia
noticiasRoutes.post('/', verifyTokenMiddleware, crearNoticia);

// // [GET] endpoint obtener noticia por id /:id

noticiasRoutes.get('/', obtenerNoticia);

// [GET] endpoint para obtener noticias del usuario logueado
noticiasRoutes.get('/my/all', verifyTokenMiddleware, listarNoticiaByUsuario);

// // [DELETE] endpoint borrar
noticiasRoutes.delete('/:id', verifyTokenMiddleware, borrarNoticia);

// [PATCH] endpoint update
noticiasRoutes.patch('/:id', verifyTokenMiddleware, actulizarNoticia);

export default noticiasRoutes;
