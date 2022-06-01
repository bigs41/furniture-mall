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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const mongoose = require("mongoose");
const responseFromat_interceptor_1 = require("../helper/interceptor/responseFromat.interceptor");
const help = require("../helper/utils");
const minio_client_service_1 = require("../helper/minio-client/minio-client.service");
const _ = require("lodash");
const collect = require('collect.js');
const query_dto_1 = require("../helper/DTO/query.dto");
let RolesController = class RolesController {
    constructor(userService, minioClientService) {
        this.userService = userService;
        this.minioClientService = minioClientService;
    }
    setRolePermission(body) {
        return this.userService.$model('rolePermission').create(body);
    }
    setRoles(body) {
        return this.userService.$model('roles').create(body);
    }
    async getRoles(req, query) {
        return await help.queryPagination(this.userService.$model('Roles'), {
            params: req.query
        });
    }
    async getRole(id, req) {
        if (!['0', 'create', 'add'].includes(id)) {
            const $permissions = collect(JSON.parse(JSON.stringify(await this.userService.$model('Permission').find()))).map(r => {
                r.create = false;
                r.read = false;
                r.edit = false;
                r.remove = false;
                r.permission = {
                    _id: r._id
                };
                return r;
            }).all();
            let $return = await this.userService.$model('Roles').aggregate([
                { $match: { _id: new mongoose.Types.ObjectId(id) } },
                { $lookup: { from: 'rolepermissions', localField: 'rolePermission', foreignField: '_id', as: 'rolePermission' } },
                { $lookup: { from: 'permissions', localField: 'rolePermission.permission._id', foreignField: '_id', as: 'permissions' } }
            ]);
            $return = collect(JSON.parse(JSON.stringify($return)))
                .map(item => {
                item.permissions = collect(item.permissions).map(function (permission) {
                    permission = _.merge(collect(item.rolePermission).filter(function (role) {
                        return role.permission._id == permission._id;
                    }).map(role => {
                        role.rolePermission_id = role._id;
                        return role;
                    }).first(), permission);
                    return permission;
                }).merge($permissions).unique('_id').all();
                return item;
            })
                .first();
            return $return;
        }
        else {
            let $return = {
                name: '',
                permissions: collect(JSON.parse(JSON.stringify(await this.userService.$model('Permission').find()))).map(r => {
                    r.create = false;
                    r.read = false;
                    r.edit = false;
                    r.remove = false;
                    r.permission = {
                        _id: r._id
                    };
                    return r;
                }).all()
            };
            return $return;
        }
    }
    async saveRoles(body, id) {
        if (!['0', 'create', 'add'].includes(id)) {
            let rolePermission_id = [];
            for (const iterator of body.permissions) {
                iterator.create = help.getBoolean(iterator.create);
                iterator.edit = help.getBoolean(iterator.edit);
                iterator.read = help.getBoolean(iterator.read);
                iterator.remove = help.getBoolean(iterator.remove);
                if (!help.empty(iterator.rolePermission_id)) {
                    await this.userService.$model('rolePermission').updateOne({
                        _id: new mongoose.Types.ObjectId(iterator.rolePermission_id)
                    }, help.only(iterator, ['permission', 'create', 'edit', 'read', 'remove']));
                    rolePermission_id.push(iterator.rolePermission_id);
                }
                else {
                    const rolePerm = await this.userService.$model('rolePermission').create(help.only(iterator, ['permission', 'create', 'edit', 'read', 'remove']));
                    rolePermission_id.push(rolePerm._id);
                }
            }
            return await this.userService.$model('Roles').updateOne({
                _id: new mongoose.Types.ObjectId(id)
            }, {
                name: body.name,
                rolePermission: rolePermission_id
            });
        }
        else {
            let rolePermission_id = [];
            for (const iterator of body.permissions) {
                iterator.create = help.getBoolean(iterator.create);
                iterator.edit = help.getBoolean(iterator.edit);
                iterator.read = help.getBoolean(iterator.read);
                iterator.remove = help.getBoolean(iterator.remove);
                const rolePerm = await this.userService.$model('rolePermission').create(help.only(iterator, ['permission', 'create', 'edit', 'read', 'remove']));
                rolePermission_id.push(rolePerm._id);
            }
            return await this.userService.$model('Roles').create({
                name: body.name,
                rolePermission: rolePermission_id
            });
        }
    }
};
__decorate([
    (0, common_1.Post)('set-role-permission'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "setRolePermission", null);
__decorate([
    (0, common_1.Post)('set-roles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "setRoles", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, query_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRole", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "saveRoles", null);
RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    (0, common_1.UseInterceptors)(responseFromat_interceptor_1.ResponseFormat),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        minio_client_service_1.MinioClientService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map