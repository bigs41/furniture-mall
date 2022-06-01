export declare class Query {
    $model: any;
    private $format;
    private $aggregate;
    private $query;
    constructor($model: any);
    aggregate(...args: any[]): this;
    sort(...args: any): Promise<this>;
    pagination(page?: number, limit?: number): Promise<any>;
}
export declare const Process: ($model: any) => Promise<Query>;
