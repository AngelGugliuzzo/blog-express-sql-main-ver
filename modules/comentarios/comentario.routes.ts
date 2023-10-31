import express from 'express';
import { borrarComentario, crearComentario } from './comentario.service';

const comentariosRoutes = express.Router();

// endpoint para crear un comentario
comentariosRoutes.post('/', crearComentario);

// // [DELETE] endpoint borrar
comentariosRoutes.delete('/:id', borrarComentario);

export default comentariosRoutes;
