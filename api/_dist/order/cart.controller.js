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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const help = require("../helper/utils");
const _ = require("lodash");
const collect = require('collect.js');
const query_dto_1 = require("../helper/DTO/query.dto");
let CartController = class CartController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async create(req, createOrderDto) {
        const user = _.get(req, 'user', null);
        const cart = await this.orderService.$model('Cart').findOne({ _id: user._id });
        createOrderDto['user'] = user._id;
        if (cart) {
            return this.orderService.$model('Cart').updateOne({ _id: user._id }, createOrderDto);
        }
        else {
            return this.orderService.$model('Cart').create(createOrderDto);
        }
    }
    findAll(req, query) {
        return help.queryPagination(this.orderService.$model('Cart'), {
            params: req.query
        });
    }
    findOne(id) {
        return this.orderService.$model('Cart').findOne({ _id: id });
    }
    update(id, updateOrderDto) {
        return this.orderService.$model('Cart').updateOne({ _id: id }, updateOrderDto);
    }
    remove(id) {
        return this.orderService.$model('Cart').deleteOne({ _id: id });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, query_dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "remove", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map