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
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const db = require("mongoose");
const class_transformer_1 = require("class-transformer");
const product_schema_1 = require("../../products/entities/product.schema");
const users_schema_1 = require("../../users/users.schema");
let Order = class Order {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], Order.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', type: String }),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', type: String }),
    __metadata("design:type", String)
], Order.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', type: String }),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [], type: Array }),
    __metadata("design:type", Array)
], Order.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: db.Schema.Types.ObjectId, ref: users_schema_1.User.name }),
    (0, class_transformer_1.Type)(() => users_schema_1.User),
    __metadata("design:type", users_schema_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: db.Schema.Types.ObjectId, ref: product_schema_1.Product.name }]),
    (0, class_transformer_1.Type)(() => product_schema_1.Product),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map