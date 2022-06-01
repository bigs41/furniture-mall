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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const roles_schema_1 = require("./roles.schema");
let User = class User {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.Mixed, default: [] }),
    __metadata("design:type", Object)
], User.prototype, "interest_gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "brithDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "online_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "validate_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "" }),
    __metadata("design:type", String)
], User.prototype, "user_img_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose.Schema.Types.ObjectId, ref: roles_schema_1.Roles.name, default: null }]),
    (0, class_transformer_1.Type)(() => roles_schema_1.Roles),
    __metadata("design:type", roles_schema_1.Roles)
], User.prototype, "roles", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], User.prototype, "address", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=users.schema.js.map