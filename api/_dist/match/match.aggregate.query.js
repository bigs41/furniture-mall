"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAggregateMatch = exports.MatchAggregate = void 0;
const match_dto_1 = require("./match.dto");
const _ = require("lodash");
const mongoQuery_query_1 = require("../helper/DTO/mongoQuery.query");
const mongo = require("mongodb");
class MatchAggregate {
    constructor(matchObject) {
        this.matchQuery = {};
        this.matchObject = matchObject;
    }
    push(operator, expression) {
        this.matchQuery[operator] = expression;
    }
    pushUpperLowerQuery(field) {
        if (this.matchObject[field] instanceof match_dto_1.Range) {
            if (!_.isEmpty(this.matchObject[field])) {
                this.matchQuery[field] = {
                    $lte: this.matchObject[field].upperLimit,
                    $gte: this.matchObject[field].lowerLimit
                };
            }
        }
        else {
            throw new Error(`field '${field}' is not Range Type`);
        }
    }
    pushGenderQuery() {
        if (!_.isEmpty(this.matchObject.gender)) {
            this.matchQuery['$or'] = this.matchObject.gender.map(o => { return { "gender": o.id }; });
        }
    }
    pushExcludeIdQuery() {
        this.matchQuery['_id'] = {
            $nin: this.matchObject.exclude.map(o => { return new mongo.ObjectId(o._id); })
        };
    }
    getQuery() {
        return this.matchQuery;
    }
}
exports.MatchAggregate = MatchAggregate;
class QueryAggregateMatch extends mongoQuery_query_1.QueryAggregateBase {
    pushRadiusDistancePipeline(matchObject) {
        this.query.push({ $addFields: { 'radius_distance': { $round: [getCalDonutDistQuery(matchObject), 1], } } });
    }
}
exports.QueryAggregateMatch = QueryAggregateMatch;
function getCalDonutDistQuery(matchObject) {
    return {
        $multiply: [{
                $acos: {
                    $add: [
                        {
                            $multiply: [
                                { $sin: { $degreesToRadians: "$latitude" } },
                                { $sin: { $degreesToRadians: Number(matchObject.latitude) } }
                            ]
                        },
                        {
                            $multiply: [
                                { $cos: { $degreesToRadians: "$latitude" } },
                                { $cos: { $degreesToRadians: Number(matchObject.latitude) } },
                                {
                                    $cos: {
                                        $subtract: [
                                            { $degreesToRadians: "$longitude" },
                                            { $degreesToRadians: Number(matchObject.longitude) }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            6371
        ]
    };
}
//# sourceMappingURL=match.aggregate.query.js.map