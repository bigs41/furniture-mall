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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const product_schema_1 = require("./entities/product.schema");
const category_schema_1 = require("./entities/category.schema");
const bundle_schema_1 = require("./entities/bundle.schema");
const _ = require("lodash");
const help = require("../helper/utils");
const mongoosePaginate = require("mongoose-paginate-v2");
require('dotenv').config();
product_schema_1.ProductSchema.plugin(mongoosePaginate);
category_schema_1.CategorySchema.plugin(mongoosePaginate);
bundle_schema_1.BundleSchema.plugin(mongoosePaginate);
const axios = require('axios');
const collect = require('collect.js');
let ProductsService = class ProductsService {
    constructor($ProductModel, $CategoryModel, $BundleModel) {
        this.$ProductModel = $ProductModel;
        this.$CategoryModel = $CategoryModel;
        this.$BundleModel = $BundleModel;
    }
    $model(model) {
        const modelName = `$${_.upperFirst(model)}Model`;
        return this[modelName];
    }
    async syncZortoutBundles() {
        try {
            let $lists = [];
            let $round = 1;
            let $limit = 100;
            let $isLoad = true;
            while ($lists.length != $limit) {
                if ($lists.length == $limit) {
                    break;
                }
                const r = await axios.get(`https://api.zortout.com/api.aspx?method=GETBUNDLES&version=3&format=json&page=${$round}&limit=100`, {
                    headers: {
                        'storename': process.env.ZORT_STORENAME,
                        'apikey': process.env.ZORT_APIKEY,
                        'apisecret': process.env.ZORT_APISECRET,
                    }
                });
                const $list = _.get(r.data, 'list', []);
                $limit = _.get(r.data, 'count', 100);
                if (!help.empty($list)) {
                    $round++;
                    $lists = _.concat($lists, $list);
                }
                else if ($round >= 100) {
                    break;
                }
                else {
                    break;
                }
            }
            if (!$lists.length) {
                return 'no category';
            }
            let $listDetail = [];
            for (let $li of $lists) {
                $li = _.get(await axios.get(`https://api.zortout.com/api.aspx?method=GETBUNDLEDETAIL&version=3&format=json&id=${$li.id}`, {
                    headers: {
                        'storename': process.env.ZORT_STORENAME,
                        'apikey': process.env.ZORT_APIKEY,
                        'apisecret': process.env.ZORT_APISECRET,
                    }
                }), 'data', {});
                $listDetail.push($li);
            }
            let $a = await this.$model('Bundle').find({ id: { '$in': $listDetail.map(x => x.id) } });
            $a = JSON.parse(JSON.stringify($a));
            if (!$a.length) {
                await this.$model('Bundle').insertMany((JSON.parse(JSON.stringify($listDetail))).map(x => {
                    x.purchaseprice = x.sellprice;
                    return x;
                }));
            }
            else {
                let diff = collect($listDetail).map(x => `${x.id}`).diff($a.map(x => `${x.id}`)).all();
                if (diff.length) {
                    await this.$model('Bundle').insertMany(collect($listDetail).filter(x => diff.includes(x.id)).map(x => {
                        x.purchaseprice = x.sellprice;
                        return x;
                    }).all());
                }
                for (const iterator of $a) {
                    await this.$model('Bundle').updateOne({ id: `${iterator.id}` }, { $set: collect($listDetail).filter(x => `${x.id}` == `${iterator.id}`).first() });
                }
            }
            return 'sync Bundle done' + new Date();
        }
        catch (error) {
            console.log(error);
        }
    }
    async syncZortoutCategory() {
        try {
            let $lists = [];
            let $round = 1;
            let $limit = 100;
            let $isLoad = true;
            while ($lists.length != $limit) {
                if ($lists.length == $limit) {
                    break;
                }
                const r = await axios.get(`https://api.zortout.com/api.aspx?method=GETCATEGORYS&version=3&format=json&page=${$round}&limit=100`, {
                    headers: {
                        'storename': process.env.ZORT_STORENAME,
                        'apikey': process.env.ZORT_APIKEY,
                        'apisecret': process.env.ZORT_APISECRET,
                    }
                });
                const $list = _.get(r.data, 'list', []);
                $limit = _.get(r.data, 'count', 100);
                if (!help.empty($list)) {
                    $round++;
                    $lists = _.concat($lists, $list);
                }
                else if ($round >= 100) {
                    break;
                }
                else {
                    break;
                }
            }
            if (!$lists.length) {
                return 'no category';
            }
            let $a = await this.$model('category').find({ id: { '$in': $lists.map(x => x.id) } });
            $a = JSON.parse(JSON.stringify($a));
            if (!$a.length) {
                await this.$model('category').insertMany($lists);
            }
            else {
                let diff = collect($lists).map(x => `${x.id}`).diff($a.map(x => `${x.id}`)).all();
                if (diff.length) {
                    await this.$model('category').insertMany(collect($lists).filter(x => diff.includes(x.id)).all());
                }
                for (const iterator of $a) {
                    await this.$model('category').updateOne({ id: `${iterator.id}` }, { $set: collect($lists).filter(x => `${x.id}` == `${iterator.id}`).first() });
                }
            }
            return 'sync category done' + new Date();
        }
        catch (error) {
            console.log(error);
        }
    }
    async syncZortout() {
        const r = await axios.get('https://api.zortout.com/api.aspx?method=GETPRODUCTS&version=3&format=json', {
            headers: {
                'storename': process.env.ZORT_STORENAME,
                'apikey': process.env.ZORT_APIKEY,
                'apisecret': process.env.ZORT_APISECRET,
            }
        });
        let $a = await this.$model('product').find({ sku: { '$in': r.data.list.map(x => x.sku) } });
        $a = JSON.parse(JSON.stringify($a));
        if (!$a.length) {
            await this.$model('product').insertMany(r.data.list);
        }
        else {
            let diff = collect(r.data.list).map(x => x.sku).diff($a.map(x => x.sku)).all();
            if (diff.length) {
                await this.$model('product').insertMany(collect(r.data.list).filter(x => diff.includes(x.sku)).all());
            }
            for (const iterator of $a) {
                await this.$model('product').updateOne({ sku: iterator.sku }, { $set: collect(r.data.list).filter(x => x.sku == iterator.sku).first() });
            }
        }
        return 'sync product done' + new Date();
    }
    create(createProductDto) {
        return 'This action adds a new product';
    }
    findAll() {
        return `This action returns all products`;
    }
    findOne(id) {
        return `This action returns a #${id} product`;
    }
    update(id, updateProductDto) {
        return `This action updates a #${id} product`;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(product_schema_1.Product.name)),
    __param(1, (0, mongoose_2.InjectModel)(category_schema_1.Category.name)),
    __param(2, (0, mongoose_2.InjectModel)(bundle_schema_1.Bundle.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map