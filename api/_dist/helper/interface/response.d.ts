export declare class ResponseStd {
    result: number;
    statusCode: number;
    message: string;
    data: any;
    constructor(data: any, message: string, result?: number, statusCode?: number);
}
