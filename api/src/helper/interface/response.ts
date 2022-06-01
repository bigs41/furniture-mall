export class ResponseStd {
    result: number;
    statusCode: number;
    message: string;
    data: any;

    constructor(data: any, message: string, result?: number, statusCode?: number) {
        this.result = result;
        this.statusCode = statusCode
        this.message = message
        this.data = data ? data : {}
    }
}