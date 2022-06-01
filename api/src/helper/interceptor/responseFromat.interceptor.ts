import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from "lodash"
export interface Response<T> {
    result: number;
    statusCode: number;
    message: string;
    total: number;
    data: T;
}

@Injectable()
export class ResponseFormat<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        const ctx = context.switchToHttp();
        ctx.getResponse().set('x-t1', '1');
        return next.handle().pipe(
            map(obj => ({
                result: !_.isUndefined(obj.result) ? obj.result : 1,
                statusCode: obj.statusCode ? obj.statusCode : context.switchToHttp().getResponse().statusCode,
                message: obj.message ? obj.message : "Ok",
                total: obj.data ? obj.data.length : obj.length||0,
                data: obj.data ? obj.data : obj,
            })),
            catchError(err => { throw new HttpException(err, 500) })
        )

    }
}
