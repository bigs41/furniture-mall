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
exports.HousesController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const swagger_1 = require("@nestjs/swagger");
const help = require("../helper/utils");
const _ = require("lodash");
const minio_client_service_1 = require("../helper/minio-client/minio-client.service");
const query_dto_1 = require("../helper/DTO/query.dto");
let HousesController = class HousesController {
    constructor(projectsService, minioClientService) {
        this.projectsService = projectsService;
        this.minioClientService = minioClientService;
    }
    async findAll(query) {
        return help.queryPagination(this.projectsService.$model("house"), {
            params: query,
            where: {}
        });
    }
    async findOne(id) {
        return this.projectsService.$model("house").findOne({ _id: id });
    }
    async upload(image, req) {
        const input = _.merge(req.body, req.query);
        let fileName = null;
        if (input.id) {
            fileName = `${input.id}`;
        }
        let uploaded_image = {};
        for (const file of req.files) {
            const $tmp = await this.minioClientService.upload(file, `house/${fileName}/${file.fieldname}`);
            uploaded_image[file.fieldname] = _.get($tmp, 'url', null);
        }
        return this.projectsService.$model("house").findOneAndUpdate({ _id: input.id }, uploaded_image, { new: true });
    }
    async delete(req) {
        const input = _.merge(req.body, req.query);
        const room = await this.projectsService.$model("house").findOne({ _id: input.id });
        let fieldname = (input.q).split(',');
        let uploaded = {};
        for (let index = 0; index < fieldname.length; index++) {
            try {
                const element = fieldname[index];
                const ext = room[element].substring(room[element].lastIndexOf('.'), room[element].length) || '.jpg';
                await this.minioClientService.delete(`house/${input.id}/${element}${ext}`);
                uploaded[element] = null;
            }
            catch (error) {
            }
        }
        return await this.projectsService.$model("house").findOneAndUpdate({ _id: input.id }, uploaded, { new: true });
    }
    async create(id, body) {
        if (['create', 'add', '0'].includes(id)) {
            return this.projectsService.$model("house").create(body);
        }
        else {
            return this.projectsService.$model("house").findOneAndUpdate({ _id: id }, body, { new: true });
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "upload", null);
__decorate([
    (0, common_1.Delete)('upload'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "create", null);
HousesController = __decorate([
    (0, common_1.Controller)('houses'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService,
        minio_client_service_1.MinioClientService])
], HousesController);
exports.HousesController = HousesController;
//# sourceMappingURL=houses.controller.js.map