import { MatchDto } from "src/match/match.dto";
import { QueryAggregateBase } from "src/helper/DTO/mongoQuery.query";
export declare class MatchAggregate {
    private matchObject;
    private matchQuery;
    constructor(matchObject: MatchDto);
    push(operator: string, expression: Object): void;
    pushUpperLowerQuery(field: string): void;
    pushGenderQuery(): void;
    pushExcludeIdQuery(): void;
    getQuery(): Object;
}
export declare class QueryAggregateMatch extends QueryAggregateBase {
    pushRadiusDistancePipeline(matchObject: MatchDto): void;
}
