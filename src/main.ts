import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FiltroExcepcionesDeNegocio } from './infraestructura/excepciones/filtro-excepciones-negocio';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger);

  app.useGlobalFilters(new FiltroExcepcionesDeNegocio(logger));

  await app.listen(3000);
}
bootstrap();
