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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./user.dto");
const users_service_1 = require("./users.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const utils = require("../helper/utils");
const minio_client_service_1 = require("../helper/minio-client/minio-client.service");
const fs = require("fs");
const bcrypt = require("bcrypt");
const query_dto_1 = require("../helper/DTO/query.dto");
let UsersController = class UsersController {
    constructor(userService, minioClientService) {
        this.userService = userService;
        this.minioClientService = minioClientService;
    }
    async genPdf(req, res) {
        let html = fs.readFileSync("template/pdf.html", "utf8");
        var users = [
            {
                name: "Shyam",
                age: "26",
            },
            {
                name: "Navjot",
                age: "26",
            },
            {
                name: "Vitthal",
                age: "26",
            },
        ];
        let $pdf = await utils.pdfBuffer(html, users);
        res.contentType("application/pdf");
        return res.send($pdf);
    }
    setRoles(body) {
        return this.userService.$model('roles').create(body);
    }
    setPermission(body) {
        return this.userService.$model('permission').create(body);
    }
    setRolePermission(body) {
        return this.userService.$model('rolePermission').create(body);
    }
    getUserAll(req, query) {
        console.log(req.user);
        return utils.queryPagination(this.userService.$model('User'), {
            params: req.query
        });
    }
    count() {
        return this.userService.$model('User').countDocuments();
    }
    async getUserOne(req, id) {
        if (['me'].includes(id)) {
            id = req.user._id;
        }
        return await this.userService.get(id);
    }
    async get(req, id) {
        return await this.userService.get(id);
    }
    getUser(obj, req) {
        let ans = this.userService.getUser(obj);
        return ans;
    }
    async setUser(_id, object, req, image) {
        let response;
        if (_id) {
            response = this.userService.updateUser(_id, object);
            return response;
        }
        else {
            response = this.userService.createUser(object);
            return response;
        }
    }
    async save(id, object, req, image) {
        delete object.password;
        delete object.permission;
        delete object.rolePermission;
        object.roles = object.roles.map(item => {
            delete item.rolePermission;
            return item;
        });
        if (object.address) {
            object.address = object.address.map(item => {
                delete item.$id;
                return item;
            });
        }
        if (!utils.empty(object.newPassword)) {
            object.password = bcrypt.hashSync(object.newPassword, 10);
        }
        if (!['create', 'add', '0'].includes(id)) {
            return this.userService.$model('User').update({ _id: id }, object);
        }
        else {
            return this.userService.$model('User').create(object);
        }
    }
    deleteUser(object) {
        let resp = this.userService.deleteUser(object);
        return resp;
    }
    onlineLocation(req) {
        let response = this.userService.onlineLocation(req);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('gen-pdf'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "genPdf", null);
__decorate([
    (0, common_1.Post)('set-roles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setRoles", null);
__decorate([
    (0, common_1.Post)('set-permission'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setPermission", null);
__decorate([
    (0, common_1.Post)('set-role-permission'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setRolePermission", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, query_dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserAll", null);
__decorate([
    (0, common_1.Get)('/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "count", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserOne", null);
__decorate([
    (0, common_1.Get)('get/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getUser'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, skipMissingProperties: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('setUser'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)('_id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setUser", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "save", null);
__decorate([
    (0, common_1.Delete)('deleteUser'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.DeleteUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('onlineLocation'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.OnlineLocationDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "onlineLocation", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        minio_client_service_1.MinioClientService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map