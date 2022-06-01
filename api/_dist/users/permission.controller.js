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
exports.PermissionController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const responseFromat_interceptor_1 = require("../helper/interceptor/responseFromat.interceptor");
const help = require("../helper/utils");
const minio_client_service_1 = require("../helper/minio-client/minio-client.service");
const collect = require('collect.js');
const query_dto_1 = require("../helper/DTO/query.dto");
let PermissionController = class PermissionController {
    constructor(userService, minioClientService) {
        this.userService = userService;
        this.minioClientService = minioClientService;
    }
    async getRoles(req, query) {
        return await help.queryPagination(this.userService.$model('Permission'), {
            params: req.query
        });
    }
    async getRole(id, req) {
        return this.userService.$model('Permission').findById(id);
    }
    async updatePermission(id, body) {
        if (!['0', 'create', 'add'].includes(id)) {
            return this.userService.$model('Permission').update({ _id: id }, body);
        }
        else {
            return this.userService.$model('Permission').create(body);
        }
    }
    async deletePermission(id) {
        return this.userService.$model('Permission').deleteOne({ _id: id });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, query_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getRole", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "updatePermission", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "deletePermission", null);
PermissionController = __decorate([
    (0, common_1.Controller)('permission'),
    (0, common_1.UseInterceptors)(responseFromat_interceptor_1.ResponseFormat),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        minio_client_service_1.MinioClientService])
], PermissionController);
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map