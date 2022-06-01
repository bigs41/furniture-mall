"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../users/user.dto");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const saltOrRounds = 10;
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(phone_number) {
        let object = new user_dto_1.GetUserDto();
        const user = await this.usersService.getUser(object);
        return user;
    }
    async checkUser(payload) {
        let user = await this.usersService.query().findOne({ email: payload.email });
        user = JSON.parse(JSON.stringify(user));
        const isMatch = await bcrypt.compare(payload.password, user.password);
        delete user.password;
        if (isMatch) {
            return { access_token: await this.jwtService.sign(user) };
        }
        return {
            access_token: null
        };
    }
    async generateJwtToken(payload) {
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async dummyOtpValidate(obj) {
        if (obj.phone_number == "0914698956" && obj.otpCode == "0000") {
            let temp = await this.usersService.getUser(obj);
            let user = temp[0];
            let ans = _.pick(user, "_id", 'phone_number');
            ans['access_token'] = await this.jwtService.sign(ans);
            return ans;
        }
        else {
            return null;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map