import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MatchDto } from './match.dto';
import * as geolib from "geolib"
import * as _ from "lodash"
import { MatchAggregate, QueryAggregateMatch } from './match.aggregate.query';
import { skip } from 'rxjs';
import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { MongoQueryOption } from 'src/helper/DTO/mongoQuery.dto';


@Injectable()
export class MatchService {

    geoGetRadius(obj: MatchDto) {
        let innerCircle = Math.sqrt(Math.pow(obj.radius_distance.lowerLimit, 1.6) / 2)

        let inner = getLatLongBound(obj, innerCircle)
        let outter = getLatLongBound(obj, obj.radius_distance.upperLimit)
        let result = [
            {
                $or: [{
                    latitude: {
                        $gte: inner.latitude.upper,
                        $lte: outter.latitude.upper
                    }
                },
                {
                    latitude: {
                        $gte: outter.latitude.lower,
                        $lte: inner.latitude.lower
                    }
                }]

            },
            {
                $or: [
                    {
                        longitude: {
                            $gte: inner.longitude.upper,
                            $lte: outter.longitude.upper
                        }
                    },
                    {
                        longitude: {
                            $gte: outter.longitude.lower,
                            $lte: inner.longitude.lower
                        }
                    }
                ]

            }
        ]

        return result
    }

    async matchAggregation(matchObject: MatchDto, optionals: MongoQueryOption) {
        let match = new MatchAggregate(matchObject)
        match.push('$and', this.geoGetRadius(matchObject))
        match.push('online_status', true)
        match.pushGenderQuery()
        match.pushUpperLowerQuery('age')

        let query = new QueryAggregateMatch()
        query.push("$match", match.getQuery())
        query.pushRadiusDistancePipeline(matchObject)

        let match2 = new MatchAggregate(matchObject)
        match2.pushUpperLowerQuery('radius_distance')
        match2.pushExcludeIdQuery()

        query.push('$match', match2.getQuery())
        query.push('$sort', { radius_distance: 1 })
        query.options(optionals, ['skip', 'limit', 'sort'])

        return query.getQuery()
    }
}


function getLatLongBound(obj: MatchDto, radius: number) {
    let latRadius = radius / 111
    let lngRadius = radius / (111.321 * Math.cos(obj.latitude * (Math.PI / 180)))
    let data =
    {
        latitude: {
            lower: obj.latitude - latRadius,
            upper: obj.latitude + latRadius
        },

        longitude: {
            lower: obj.longitude - lngRadius,
            upper: obj.longitude + lngRadius
        }
    }
    return data
}