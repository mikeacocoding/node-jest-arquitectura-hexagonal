import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UsuarioModule],
})
export class InfraestructuraModule {}
