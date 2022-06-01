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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const responseFromat_interceptor_1 = require("../helper/interceptor/responseFromat.interceptor");
const response_1 = require("../helper/interface/response");
const user_dto_1 = require("../users/user.dto");
const users_service_1 = require("../users/users.service");
const auth_dto_1 = require("./auth.dto");
const auth_service_1 = require("./auth.service");
let _ = require("lodash");
let AuthController = class AuthController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async authLocal(getUserDto) {
        return await this.authService.checkUser(getUserDto);
    }
    async validatePhoneNumber(getUserDto) {
        let ans = await this.userService.getUser(getUserDto);
        if (_.size(ans)) {
            return new response_1.ResponseStd(ans, "User already existed", 1);
        }
        else {
            return new response_1.ResponseStd({}, "User not found", 0);
        }
    }
    async validateOtp(validateObject) {
        let validate = await this.authService.dummyOtpValidate(validateObject);
        if (validate) {
            return new response_1.ResponseStd(validate, "success", 1);
        }
        else {
            return new response_1.ResponseStd(validate, "not success", 0);
        }
    }
    getToken(getUserDto) {
        return this.authService.generateJwtToken(getUserDto);
    }
};
__decorate([
    (0, common_1.Post)('local'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authLocal", null);
__decorate([
    (0, common_1.Get)('validate_phone_number'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validatePhoneNumber", null);
__decorate([
    (0, common_1.Get)('validateOtp'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ValidateOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateOtp", null);
__decorate([
    (0, common_1.Get)('getToken'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getToken", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, common_1.UseInterceptors)(responseFromat_interceptor_1.ResponseFormat),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map