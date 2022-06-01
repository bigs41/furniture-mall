import { ResponseStd } from 'src/helper/interface/response';
import { GetUserDto } from 'src/users/user.dto';
import { UsersService } from '../users/users.service';
import { ValidateOtpDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    authLocal(getUserDto: GetUserDto): Promise<{
        access_token: string;
    }>;
    validatePhoneNumber(getUserDto: GetUserDto): Promise<ResponseStd>;
    validateOtp(validateObject: ValidateOtpDto): Promise<ResponseStd>;
    getToken(getUserDto: GetUserDto): Promise<{
        access_token: string;
    }>;
}
