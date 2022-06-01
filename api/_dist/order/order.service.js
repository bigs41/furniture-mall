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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const order_schema_1 = require("./entities/order.schema");
const cart_schema_1 = require("./entities/cart.schema");
const _ = require("lodash");
const mongoosePaginate = require("mongoose-paginate-v2");
order_schema_1.OrderSchema.plugin(mongoosePaginate);
cart_schema_1.CartSchema.plugin(mongoosePaginate);
let OrderService = class OrderService {
    constructor($OrderModel, $CartModel) {
        this.$OrderModel = $OrderModel;
        this.$CartModel = $CartModel;
    }
    $model(model) {
        const modelName = `$${_.upperFirst(model)}Model`;
        return this[modelName];
    }
    create(createOrderDto) {
        return 'This action adds a new order';
    }
    findAll() {
        return `This action returns all order`;
    }
    findOne(id) {
        return `This action returns a #${id} order`;
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, mongoose_2.InjectModel)(cart_schema_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map