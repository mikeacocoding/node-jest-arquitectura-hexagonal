import { Controller, Post, Body } from '@nestjs/common';
import { ComandoRegistrarUsuario } from 'src/aplicacion/usuario/comando/comando-registrar-usuario';
import { ManejarRegistrarUsuario } from 'src/aplicacion/usuario/comando/manejador-registar-usuario';

@Controller("usuarios")
export class UsuarioControlador {
  constructor(private readonly _manejadorRegistrarUsuario: ManejarRegistrarUsuario) { }

  @Post()
  async crearUsuario(@Body() comandoRegistrarUsuario: ComandoRegistrarUsuario) {
    await this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario);
  }
}
