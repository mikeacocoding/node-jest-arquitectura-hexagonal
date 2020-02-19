import { Controller, Get } from '@nestjs/common';
import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';

@Controller("usuarios")
export class UsuarioControlador {
  constructor(private readonly servicioRegistrarUsuario: ServicioRegistrarUsuario) { }

  @Get()
  async getHello(): Promise<string> {
    await this.servicioRegistrarUsuario.ejecutar(new Usuario("juan", "12341", new Date()));
    return "Ok";
  }
}
