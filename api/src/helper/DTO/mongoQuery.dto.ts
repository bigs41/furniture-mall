import { Type } from 'class-transformer';
import {

    IsJSON,
    IsNumber,
    IsNumberString,
    IsObject,
    IsOptional,
    IsString,
    Max,
} from 'class-validator';
import { TimeGenerate } from '../timeFormat';

export class MongoQueryOption {
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    skip: Number = 0
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    @Max(500)
    limit: Number = 200
    @IsJSON()
    @IsOptional()
    sort: string = undefined
}

