"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const match_aggregate_query_1 = require("./match.aggregate.query");
let MatchService = class MatchService {
    geoGetRadius(obj) {
        let innerCircle = Math.sqrt(Math.pow(obj.radius_distance.lowerLimit, 1.6) / 2);
        let inner = getLatLongBound(obj, innerCircle);
        let outter = getLatLongBound(obj, obj.radius_distance.upperLimit);
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
        ];
        return result;
    }
    async matchAggregation(matchObject, optionals) {
        let match = new match_aggregate_query_1.MatchAggregate(matchObject);
        match.push('$and', this.geoGetRadius(matchObject));
        match.push('online_status', true);
        match.pushGenderQuery();
        match.pushUpperLowerQuery('age');
        let query = new match_aggregate_query_1.QueryAggregateMatch();
        query.push("$match", match.getQuery());
        query.pushRadiusDistancePipeline(matchObject);
        let match2 = new match_aggregate_query_1.MatchAggregate(matchObject);
        match2.pushUpperLowerQuery('radius_distance');
        match2.pushExcludeIdQuery();
        query.push('$match', match2.getQuery());
        query.push('$sort', { radius_distance: 1 });
        query.options(optionals, ['skip', 'limit', 'sort']);
        return query.getQuery();
    }
};
MatchService = __decorate([
    (0, common_1.Injectable)()
], MatchService);
exports.MatchService = MatchService;
function getLatLongBound(obj, radius) {
    let latRadius = radius / 111;
    let lngRadius = radius / (111.321 * Math.cos(obj.latitude * (Math.PI / 180)));
    let data = {
        latitude: {
            lower: obj.latitude - latRadius,
            upper: obj.latitude + latRadius
        },
        longitude: {
            lower: obj.longitude - lngRadius,
            upper: obj.longitude + lngRadius
        }
    };
    return data;
}
//# sourceMappingURL=match.service.js.map