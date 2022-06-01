import { MatchDto, Range } from "src/match/match.dto";
import * as _ from 'lodash'
import { QueryAggregateBase } from "src/helper/DTO/mongoQuery.query";
import * as mongo from "mongodb"

export class MatchAggregate {
    private matchObject: MatchDto
    private matchQuery: Object = {}
    constructor(matchObject: MatchDto) {
        this.matchObject = matchObject
    }
    public push(operator: string, expression: Object) {
        this.matchQuery[operator] = expression
    }

    public pushUpperLowerQuery(field: string) {

        if (this.matchObject[field] instanceof Range) {
            if (!_.isEmpty(this.matchObject[field])) {
                this.matchQuery[field] = {
                    $lte: this.matchObject[field].upperLimit,
                    $gte: this.matchObject[field].lowerLimit
                }
            }
        }
        else {
            throw new Error(`field '${field}' is not Range Type`)
        }
    }
    public pushGenderQuery() {
        if (!_.isEmpty(this.matchObject.gender)) {
            this.matchQuery['$or'] = this.matchObject.gender.map(o => { return { "gender": o.id } })
        }
    }
    public pushExcludeIdQuery() {

        this.matchQuery['_id'] = {
            $nin: this.matchObject.exclude.map(o => { return new mongo.ObjectId(o._id) })

        }

    }
    public getQuery() {
        return this.matchQuery
    }
}

export class QueryAggregateMatch extends QueryAggregateBase {
    public pushRadiusDistancePipeline(matchObject: MatchDto) {
        this.query.push({ $addFields: { 'radius_distance': { $round: [getCalDonutDistQuery(matchObject), 1], } } })
    }
}

function getCalDonutDistQuery(matchObject: MatchDto) {
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
        }
            , 6371
        ]

    }
}