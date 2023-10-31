import { IUsuario } from '../usuarios/usuario.interface';

export interface IjwtPayload {
	usuario: IUsuario;
}
