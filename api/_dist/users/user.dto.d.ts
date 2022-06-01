import { GenderObj } from 'src/match/match.dto';
export declare class UserDto {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    age: Number;
    gender: number;
    interest_gender: GenderObj;
    online_status: boolean;
    validate_status: boolean;
    passions: number[];
    user_img_url: string;
    phone_number: string;
    latitude: string;
    longitude: string;
}
declare const GetUserDto_base: typeof UserDto;
export declare class GetUserDto extends GetUserDto_base {
    skip?: number;
    limit?: number;
    search?: string;
}
declare const DeleteUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserDto>>;
export declare class DeleteUserDto extends DeleteUserDto_base {
    _id: string;
}
declare const OnlineLocationDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserDto>>;
export declare class OnlineLocationDto extends OnlineLocationDto_base {
    _id: string;
    latitude: string;
    longitude: string;
    online_status: boolean;
}
export {};
