import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    console.error(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = (exception.getStatus && exception.getStatus()) || 403;

    response.status(statusCode).json({
      statusCode,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
