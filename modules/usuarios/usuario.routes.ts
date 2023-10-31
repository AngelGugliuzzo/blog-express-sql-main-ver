import express from 'express';
import { crearUsuario } from './usuario.service';
import { verifyTokenMiddleware } from '../auth/auth.middleware';

export const usuarioRoutes = express.Router();

usuarioRoutes.post('/', crearUsuario);
