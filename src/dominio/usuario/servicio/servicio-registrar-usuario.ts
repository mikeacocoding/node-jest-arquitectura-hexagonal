import { RepositorioUsuario } from "../puerto/repositorio/repositorio-usuario";
import { Usuario } from "../modelo/usuario";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ServicioRegistrarUsuario {

    private _repositorioUsuario: RepositorioUsuario;

    constructor(repositorioUsuario: RepositorioUsuario) {
        this._repositorioUsuario = repositorioUsuario;
    }

    async ejecutar(usuario: Usuario) {
        if(await this._repositorioUsuario.existeNombreUsuario(usuario.nombre)){
            throw new Error("El nombre de usuario juan ya existe");
        }
        await this._repositorioUsuario.guardar(usuario);
    }

}
