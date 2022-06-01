import { MongoQueryOption } from './mongoQuery.dto';
export declare class QueryAggregateBase {
    protected query: any[];
    push(operator: string, pipeline: Object, ignoreNull?: boolean): void;
    options(obj: MongoQueryOption, pipeline: string[] | string): void;
    getQuery(): any[];
}
