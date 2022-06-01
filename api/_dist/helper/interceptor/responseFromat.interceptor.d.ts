import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface Response<T> {
    result: number;
    statusCode: number;
    message: string;
    total: number;
    data: T;
}
export declare class ResponseFormat<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>>;
}
