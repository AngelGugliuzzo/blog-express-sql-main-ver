import express from 'express';
import { login } from './auth.service';

export const authRoutes = express.Router();

authRoutes.post('/login', login);
