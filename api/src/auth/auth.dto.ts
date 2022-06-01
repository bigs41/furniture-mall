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

} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'
import { TimeGenerate } from '../helper/timeFormat';
import { ApiProperty } from '@nestjs/swagger';



export class ValidateDto {
    @NotContains("-")
    @IsPhoneNumber("TH")
    @Length(10, 10)
    @IsNumberString()
    phone_number: string;
}


export class ValidateOtpDto extends ValidateDto {
    @IsNumberString()
    @IsNotEmpty()
    otpCode: string;
}





