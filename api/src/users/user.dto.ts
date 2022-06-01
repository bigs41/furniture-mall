import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsNotEmpty,
    IsUUID,
    IsDefined,
    ValidateNested,
    IsJSON,
    IsLatLong,
    IsPhoneNumber,
    NotContains,
    isNotEmptyObject,
    IsNotEmptyObject,
    IsEmpty,
    Allow,
    IsLatitude,
    IsLongitude,
    IsString,
    IsNumber,
    IsAlphanumeric,
    IsNumberString,
    IsOptional,
    IsEnum,
    isURL,
    IsUrl,
    IsArray,
    IsMongoId,

} from 'class-validator';
import { PartialType, PickType } from '@nestjs/mapped-types'
import { TimeGenerate } from '../helper/timeFormat';
import { ApiProperty } from '@nestjs/swagger';
import { GenderObj } from 'src/match/match.dto';
import { isNumber } from 'lodash';



export class UserDto {
    @IsMongoId()
    @IsOptional()
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    @IsNumber()
    @IsOptional()
    age: Number
    @IsOptional()
    gender: number
    @IsOptional()
    interest_gender: GenderObj
    online_status: boolean;
    validate_status: boolean;

    @IsArray()
    @IsOptional()
    passions: number[];

    @IsUrl()
    @IsOptional()
    user_img_url: string
    @NotContains("-")
    @IsPhoneNumber("TH")
    @Length(10, 10)
    @IsNumberString()
    @IsOptional()
    phone_number: string;

    @IsLatitude()
    @IsOptional()
    latitude: string;

    @IsLongitude()
    @IsOptional()
    longitude: string;
}


export class GetUserDto extends (UserDto) {
    skip?: number = 0;
    limit?: number = null;
    search?: string = null;
}

export class DeleteUserDto extends PartialType(UserDto) {
    @IsNotEmpty()
    @IsMongoId()
    _id: string;
}

export class OnlineLocationDto extends PartialType(UserDto) {
    @IsMongoId()
    @IsNotEmpty()
    _id: string;
    @IsLatitude()
    @IsNotEmpty()
    latitude: string;
    @IsLongitude()
    @IsNotEmpty()
    longitude: string;
    online_status: boolean = true

}


