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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("./news.service");
const update_news_dto_1 = require("./dto/update-news.dto");
const help = require("../helper/utils");
const query_dto_1 = require("../helper/DTO/query.dto");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    create(createNewsDto) {
        return this.newsService.$model('news').create(createNewsDto);
    }
    countAll(query) {
        return this.newsService.$model('news').countDocuments();
    }
    findAll(query) {
        return help.queryPagination(this.newsService.$model('news'), {
            params: query
        });
    }
    findOne(id) {
        return this.newsService.$model('news').findOne({ _id: id });
    }
    async save(id, updateNewsDto) {
        if (!['create', 'add', '0'].includes(id)) {
            return this.newsService.$model('news').updateOne({ _id: id }, updateNewsDto);
        }
        else {
            updateNewsDto.sort = await this.newsService.$model('news').countDocuments() + 1;
            console.log(updateNewsDto);
            return this.newsService.$model('news').create(updateNewsDto);
        }
    }
    async updateSort(id, sort, body) {
        const current = await this.newsService.$model('news').findOne({ _id: id });
        if (help.getNumber(sort) > help.getNumber(current.sort)) {
            await this.newsService.$model('news').updateMany({ sort: { $gte: help.getNumber(current.sort), $lte: help.getNumber(sort) } }, { $inc: { sort: -1 } });
        }
        else {
            await this.newsService.$model('news').updateMany({ sort: { $gte: help.getNumber(sort), $lte: help.getNumber(current.sort) } }, { $inc: { sort: 1 } });
        }
        return await this.newsService.$model('news').updateOne({ _id: id }, { sort: sort });
    }
    async remove(id) {
        const current = await this.newsService.$model('news').findOne({ _id: id });
        await this.newsService.$model('news').updateMany({ sort: { $gte: help.getNumber(current.sort) } }, { $inc: { sort: -1 } });
        return await this.newsService.$model('news').deleteOne({ _id: id });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_news_dto_1.UpdateNewsDto]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('count'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "countAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_news_dto_1.UpdateNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "save", null);
__decorate([
    (0, common_1.Patch)(':id/:sort'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('sort')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "updateSort", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "remove", null);
NewsController = __decorate([
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map