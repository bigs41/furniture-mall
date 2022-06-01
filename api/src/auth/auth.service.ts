import { Injectable } from '@nestjs/common';
import { GetUserDto, UserDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as _ from "lodash"
import { ValidateOtpDto } from './auth.dto';
import { User } from 'src/users/users.schema';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(phone_number: GetUserDto) {
        let object = new GetUserDto()
        const user = await this.usersService.getUser(object);
        return user;
    }
    async checkUser(payload: any) {
        let user = await this.usersService.query().findOne({ email: payload.email })
        user = JSON.parse(JSON.stringify(user))
        const isMatch = await bcrypt.compare(payload.password, user.password);
        delete user.password;
        if(isMatch){
            return {access_token:await this.jwtService.sign(user)};
        }
        return {
            access_token: null
        }
    }
    async generateJwtToken(payload: any) {
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async dummyOtpValidate(obj: ValidateOtpDto) {
        if (obj.phone_number == "0914698956" && obj.otpCode == "0000") {
            let temp = await this.usersService.getUser(obj);
            let user = temp[0]
            let ans = _.pick(user, "_id", 'phone_number')
            ans['access_token'] = await this.jwtService.sign(ans);
            return ans
        } else {
            return null
        }

    }
}
