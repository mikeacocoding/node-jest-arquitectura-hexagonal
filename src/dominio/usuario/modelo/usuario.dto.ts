import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  fechaCreacion: Date;
}
