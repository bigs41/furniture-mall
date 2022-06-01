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
exports.BundleController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const responseFromat_interceptor_1 = require("../helper/interceptor/responseFromat.interceptor");
const help = require("../helper/utils");
const _ = require("lodash");
const mongoose = require("mongoose");
const query_dto_1 = require("../helper/DTO/query.dto");
let BundleController = class BundleController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async syncZortout() {
        return await this.productsService.syncZortoutBundles();
    }
    count() {
        return this.productsService.$model('bundle').countDocuments();
    }
    findAll(query) {
        return help.queryPagination(this.productsService.$model('bundle'), {
            params: query
        });
    }
    async findOne(id) {
        return _.head(await this.productsService.$model('bundle').aggregate([])
            .match({ _id: new mongoose.Types.ObjectId(id) })
            .lookup({
            from: 'products',
            localField: 'list.id',
            foreignField: 'id',
            as: 'products'
        }));
    }
    async save(id, body) {
        if (['create', 'add', '0'].includes(id)) {
            return this.productsService.$model('bundle').create(body);
        }
        else {
            return this.productsService.$model('bundle').findOneAndUpdate({ _id: id }, body, { new: true });
        }
    }
};
__decorate([
    (0, common_1.Get)('/syncZortout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BundleController.prototype, "syncZortout", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BundleController.prototype, "count", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], BundleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BundleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BundleController.prototype, "save", null);
BundleController = __decorate([
    (0, common_1.UseInterceptors)(responseFromat_interceptor_1.ResponseFormat),
    (0, common_1.Controller)('bundle'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], BundleController);
exports.BundleController = BundleController;
//# sourceMappingURL=bundle.controller.js.map