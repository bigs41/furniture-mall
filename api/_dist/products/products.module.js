"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const category_controller_1 = require("./category.controller");
const bundle_controller_1 = require("./bundle.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./entities/product.schema");
const category_schema_1 = require("./entities/category.schema");
const bundle_schema_1 = require("./entities/bundle.schema");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema },
                { name: category_schema_1.Category.name, schema: category_schema_1.CategorySchema },
                { name: bundle_schema_1.Bundle.name, schema: bundle_schema_1.BundleSchema },
            ])],
        controllers: [products_controller_1.ProductsController, category_controller_1.CategoryController, bundle_controller_1.BundleController],
        providers: [products_service_1.ProductsService],
        exports: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map