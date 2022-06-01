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
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const mongoQuery_dto_1 = require("../helper/DTO/mongoQuery.dto");
const responseFromat_interceptor_1 = require("../helper/interceptor/responseFromat.interceptor");
const users_service_1 = require("../users/users.service");
const match_dto_1 = require("./match.dto");
const match_service_1 = require("./match.service");
let MatchController = class MatchController {
    constructor(userService, matchService) {
        this.userService = userService;
        this.matchService = matchService;
    }
    async getMatch(optionals, matchObject) {
        let query = await this.matchService.matchAggregation(matchObject, optionals);
        let ans = await this.userService.aggregation(query);
        return ans;
    }
};
__decorate([
    (0, common_1.Get)('getMatch'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoQuery_dto_1.MongoQueryOption, match_dto_1.MatchDto]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getMatch", null);
MatchController = __decorate([
    (0, common_1.Controller)('match'),
    (0, common_1.UseInterceptors)(responseFromat_interceptor_1.ResponseFormat),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        match_service_1.MatchService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map