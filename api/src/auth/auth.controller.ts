import { BadRequestException, Body, Controller, Get, Query,All,Post, Res, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { ResponseStd } from 'src/helper/interface/response';
import { GetUserDto, UserDto } from 'src/users/user.dto';
import { UsersService } from '../users/users.service';
import { ValidateOtpDto } from './auth.dto';
import { AuthService } from './auth.service';

let _ = require("lodash")


@Controller('auth')
@UseInterceptors(ResponseFormat)

export class AuthController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
    ) { }
    @Post('local')
    async authLocal(@Body() getUserDto: GetUserDto) {
        return await this.authService.checkUser(getUserDto)
    }
    @Get('validate_phone_number')
    @UsePipes(new ValidationPipe({ transform: true }))
    async validatePhoneNumber(@Query() getUserDto: GetUserDto) {

        let ans: Object[] = await this.userService.getUser(getUserDto)
        if (_.size(ans)) {
            // let ans1 = _.pick(ans[0], ["_id",])
            return new ResponseStd(ans, "User already existed", 1)
        } else {
            return new ResponseStd({}, "User not found", 0)
        }
    }
    @Get('validateOtp')
    @UsePipes(new ValidationPipe({ transform: true }))
    async validateOtp(@Query() validateObject: ValidateOtpDto) {
        let validate = await this.authService.dummyOtpValidate(validateObject)
        if (validate) {
            return new ResponseStd(validate, "success", 1)

        } else {
            return new ResponseStd(validate, "not success", 0)

        }
    }

    @Get('getToken')
    getToken(@Query() getUserDto: GetUserDto) {
        return this.authService.generateJwtToken(getUserDto)
    }
}
