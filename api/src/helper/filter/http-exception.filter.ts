import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { TimeGenerate } from '../timeFormat';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        response
            .status(status)
            .json({
                result: 0,
                statusCode: status,
                data: {},
                message: "Error",
                error: exception.getResponse(),
                path: request.url,
                timestamp: (new TimeGenerate).getTime(),
            });
    }
}