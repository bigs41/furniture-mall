import {
    IsNotEmpty,
    ValidateNested,
    IsLatitude,
    IsLongitude,
    IsString,
    IsNumber,
    IsOptional,
    IsArray,
    ArrayMaxSize,
    IsMongoId,

} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'
import { TimeGenerate } from '../helper/timeFormat';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class Range {
    @IsNumber()
    @IsNotEmpty()
    upperLimit: number
    @IsNumber()
    @IsNotEmpty()
    lowerLimit: number
}

class UserObj {
    @IsMongoId()
    _id: string
}

export class GenderObj {
    @IsNumber()
    id: number
    @IsString()
    @IsOptional()
    label: string
}

export class MatchDto {

    @IsLatitude()
    @IsNotEmpty()
    @Type(() => Number)
    latitude: number
    @IsLongitude()
    @IsNotEmpty()
    @Type(() => Number)
    longitude: number
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Range)
    radius_distance: Range

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => Range)
    age: Range

    @IsOptional()
    @IsArray()
    @ArrayMaxSize(3)
    @ValidateNested({ each: true })
    @Type(() => GenderObj)
    gender: GenderObj[]

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => UserObj)
    exclude: UserObj[]

}











