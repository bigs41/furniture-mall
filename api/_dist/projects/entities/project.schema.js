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
exports.ProjectSchema = exports.Project = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const db = require("mongoose");
const class_transformer_1 = require("class-transformer");
const product_schema_1 = require("../../products/entities/product.schema");
const bundle_schema_1 = require("../../products/entities/bundle.schema");
const room_schema_1 = require("./room.schema");
const house_schema_1 = require("./house.schema");
const style_schema_1 = require("./style.schema");
let Project = class Project {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], Project.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "uri", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Project.prototype, "area", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: db.Schema.Types.ObjectId, ref: style_schema_1.Style.name }),
    (0, class_transformer_1.Type)(() => style_schema_1.Style),
    __metadata("design:type", style_schema_1.Style)
], Project.prototype, "style", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Boolean)
], Project.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "sellpricetotal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "sellprice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "availablestock", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: db.Schema.Types.ObjectId, ref: product_schema_1.Product.name }]),
    (0, class_transformer_1.Type)(() => product_schema_1.Product),
    __metadata("design:type", Array)
], Project.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: db.Schema.Types.ObjectId, ref: bundle_schema_1.Bundle.name }]),
    (0, class_transformer_1.Type)(() => bundle_schema_1.Bundle),
    __metadata("design:type", Array)
], Project.prototype, "bundles", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: db.Schema.Types.ObjectId, ref: room_schema_1.Room.name }]),
    (0, class_transformer_1.Type)(() => room_schema_1.Room),
    __metadata("design:type", Array)
], Project.prototype, "rooms", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: db.Schema.Types.ObjectId, ref: house_schema_1.House.name }]),
    (0, class_transformer_1.Type)(() => house_schema_1.House),
    __metadata("design:type", Array)
], Project.prototype, "houses", void 0);
Project = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Project);
exports.Project = Project;
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(Project);
//# sourceMappingURL=project.schema.js.map