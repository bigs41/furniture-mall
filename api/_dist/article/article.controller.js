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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("./dto/create-article.dto");
const help = require("../helper/utils");
const query_dto_1 = require("../helper/DTO/query.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    create(createArticleDto) {
        return this.articleService.$model('article').create(createArticleDto);
    }
    findAll(query) {
        return help.queryPagination(this.articleService.$model('article'), {
            params: query
        });
    }
    countAll(query) {
        return this.articleService.$model('article').countDocuments();
    }
    findOne(id) {
        return this.articleService.$model('article').findOne({ _id: id });
    }
    async save(id, input) {
        if (!['create', 'add', '0'].includes(id)) {
            return this.articleService.$model('article').updateOne({ _id: id }, input);
        }
        else {
            input.sort = await this.articleService.$model('article').countDocuments() + 1;
            return this.articleService.$model('article').create(input);
        }
    }
    async updateSort(id, sort, body) {
        const current = await this.articleService.$model('article').findOne({ _id: id });
        if (help.getNumber(sort) > help.getNumber(current.sort)) {
            await this.articleService.$model('article').updateMany({ sort: { $gte: help.getNumber(current.sort), $lte: help.getNumber(sort) } }, { $inc: { sort: -1 } });
        }
        else {
            await this.articleService.$model('article').updateMany({ sort: { $gte: help.getNumber(sort), $lte: help.getNumber(current.sort) } }, { $inc: { sort: 1 } });
        }
        return await this.articleService.$model('article').updateOne({ _id: id }, { sort: sort });
    }
    async remove(id) {
        const current = await this.articleService.$model('article').findOne({ _id: id });
        await this.articleService.$model('article').updateMany({ sort: { $gte: help.getNumber(current.sort) } }, { $inc: { sort: -1 } });
        return await this.articleService.$model('article').deleteOne({ _id: id });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "countAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "save", null);
__decorate([
    (0, common_1.Patch)(':id/:sort'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('sort')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateSort", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "remove", null);
ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map