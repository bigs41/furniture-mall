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
exports.RolesSchema = exports.Roles = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const rolePermission_schema_1 = require("./rolePermission.schema");
let Roles = class Roles {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], Roles.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Roles.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Roles.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose.Schema.Types.ObjectId, ref: rolePermission_schema_1.RolePermission.name, default: null }]),
    (0, class_transformer_1.Type)(() => rolePermission_schema_1.RolePermission),
    __metadata("design:type", rolePermission_schema_1.RolePermission)
], Roles.prototype, "rolePermission", void 0);
Roles = __decorate([
    (0, mongoose_1.Schema)()
], Roles);
exports.Roles = Roles;
exports.RolesSchema = mongoose_1.SchemaFactory.createForClass(Roles);
//# sourceMappingURL=roles.schema.js.map