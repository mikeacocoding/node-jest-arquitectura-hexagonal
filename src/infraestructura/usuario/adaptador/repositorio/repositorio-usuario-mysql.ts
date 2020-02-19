import { RepositorioUsuario } from "src/dominio/usuario/puerto/repositorio/repositorio-usuario";
import { Usuario } from "src/dominio/usuario/modelo/usuario";

export class RepositorioUsuarioMysql implements RepositorioUsuario {

    usuarios = new Array<Usuario>();;

    async existeNombreUsuario(nombre: string): Promise<boolean> {
        return this.usuarios.filter((usuario) => usuario.nombre == nombre).length > 0;
    } 
    
    async guardar(usuario: Usuario) {
        this.usuarios.push(usuario);
    }


}