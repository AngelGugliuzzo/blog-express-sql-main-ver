import { IUsuario } from '../usuarios/usuario.interface';

export interface iNoticia {
	id?: string;
	titulo: string;
	contenido: string;
	usuario?: IUsuario;
}
