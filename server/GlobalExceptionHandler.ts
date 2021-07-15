import { ExceptionFilter, Catch, ArgumentsHost, InternalServerErrorException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response
      .status(403)
      .json({
        statusCode: 403,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}