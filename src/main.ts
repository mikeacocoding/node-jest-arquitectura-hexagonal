import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FiltroExcepcionesDeNegocio } from './infraestructura/excepciones/filtro-excepciones-negocio';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new FiltroExcepcionesDeNegocio());
  await app.listen(3000);
}
bootstrap();
