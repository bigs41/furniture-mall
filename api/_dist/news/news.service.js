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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const news_schema_1 = require("./entities/news.schema");
const _ = require("lodash");
const mongoosePaginate = require("mongoose-paginate-v2");
news_schema_1.NewsSchema.plugin(mongoosePaginate);
let NewsService = class NewsService {
    constructor($NewsModel) {
        this.$NewsModel = $NewsModel;
    }
    $model(model) {
        const modelName = `$${_.upperFirst(model)}Model`;
        return this[modelName];
    }
    create(createNewsDto) {
        return 'This action adds a new news';
    }
    findAll() {
        return `This action returns all news`;
    }
    findOne(id) {
        return `This action returns a #${id} news`;
    }
    update(id, updateNewsDto) {
        return `This action updates a #${id} news`;
    }
    remove(id) {
        return `This action removes a #${id} news`;
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(news_schema_1.News.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map