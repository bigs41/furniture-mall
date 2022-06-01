"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_schema_1 = require("./users.schema");
const roles_schema_1 = require("./roles.schema");
const permission_schema_1 = require("./permission.schema");
const rolePermission_schema_1 = require("./rolePermission.schema");
const mongoose_1 = require("@nestjs/mongoose");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const roles_controller_1 = require("./roles.controller");
const permission_controller_1 = require("./permission.controller");
const minio_client_module_1 = require("../helper/minio-client/minio-client.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema },
                { name: roles_schema_1.Roles.name, schema: roles_schema_1.RolesSchema },
                { name: permission_schema_1.Permission.name, schema: permission_schema_1.PermissionSchema },
                { name: rolePermission_schema_1.RolePermission.name, schema: rolePermission_schema_1.RolePermissionSchema },
            ]),
            minio_client_module_1.MinioClientModule
        ],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController, roles_controller_1.RolesController, permission_controller_1.PermissionController]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map