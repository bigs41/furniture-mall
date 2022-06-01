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
exports.ModelSchema = exports.Model = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const db = require("mongoose");
const class_transformer_1 = require("class-transformer");
const product_schema_1 = require("../../products/entities/product.schema");
const project_schema_1 = require("./project.schema");
let Model = class Model {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], Model.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Model.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Model.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Model.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: db.Schema.Types.ObjectId, ref: product_schema_1.Product.name }),
    (0, class_transformer_1.Type)(() => product_schema_1.Product),
    __metadata("design:type", product_schema_1.Product)
], Model.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: db.Schema.Types.ObjectId, ref: project_schema_1.Project.name }),
    (0, class_transformer_1.Type)(() => project_schema_1.Project),
    __metadata("design:type", project_schema_1.Project)
], Model.prototype, "project", void 0);
Model = __decorate([
    (0, mongoose_1.Schema)()
], Model);
exports.Model = Model;
exports.ModelSchema = mongoose_1.SchemaFactory.createForClass(Model);
//# sourceMappingURL=model.schema.js.map