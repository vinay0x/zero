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
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const is404 = exception.getStatus() == 404;
    const statusCode = is404 ? 404 : 403;

    response.status(statusCode).json({
      statusCode,
      message: exception.message,
      exception: is404 && 'NotFoundException',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
