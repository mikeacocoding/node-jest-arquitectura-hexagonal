import { Module } from '@nestjs/common';

import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';
import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { RepositorioUsuarioMysql } from './adaptador/repositorio/repositorio-usuario-mysql';
import { UsuarioControlador } from './controlador/usuario.controlador';

const repositorioUsuarioProvider = {
  provide: RepositorioUsuario,
  useClass: RepositorioUsuarioMysql
};
@Module({
  providers:
    [
      ServicioRegistrarUsuario,
      repositorioUsuarioProvider
    ],
  controllers: [UsuarioControlador]

})
export class UsuarioModule { }
