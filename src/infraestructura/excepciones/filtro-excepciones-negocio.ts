import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';

@Catch(ErrorDeNegocio)
export class FiltroExcepcionesDeNegocio implements ExceptionFilter {
    catch(exception: ErrorDeNegocio, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        response
            .status(HttpStatus.BAD_REQUEST)
            .json({
                statusCode: HttpStatus.BAD_REQUEST,
                timestamp: new Date().toISOString(),
                path: request.url,
                mensaje: exception.message
            });
    }
}