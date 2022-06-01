import { GetUserDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ValidateOtpDto } from './auth.dto';
import { User } from 'src/users/users.schema';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(phone_number: GetUserDto): Promise<User[]>;
    checkUser(payload: any): Promise<{
        access_token: string;
    }>;
    generateJwtToken(payload: any): Promise<{
        access_token: string;
    }>;
    dummyOtpValidate(obj: ValidateOtpDto): Promise<Pick<User, "_id" | "phone_number">>;
}
