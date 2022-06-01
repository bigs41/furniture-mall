import { MatchDto } from './match.dto';
import { MongoQueryOption } from 'src/helper/DTO/mongoQuery.dto';
export declare class MatchService {
    geoGetRadius(obj: MatchDto): ({
        $or: {
            latitude: {
                $gte: number;
                $lte: number;
            };
        }[];
    } | {
        $or: {
            longitude: {
                $gte: number;
                $lte: number;
            };
        }[];
    })[];
    matchAggregation(matchObject: MatchDto, optionals: MongoQueryOption): Promise<any[]>;
}
