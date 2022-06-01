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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const mongoose = require("mongoose");
const update_project_dto_1 = require("./dto/update-project.dto");
const swagger_1 = require("@nestjs/swagger");
const help = require("../helper/utils");
const _ = require("lodash");
const minio_client_service_1 = require("../helper/minio-client/minio-client.service");
const query_dto_1 = require("../helper/DTO/query.dto");
let ProjectsController = class ProjectsController {
    constructor(projectsService, minioClientService) {
        this.projectsService = projectsService;
        this.minioClientService = minioClientService;
    }
    findAll(query) {
        return help.queryPagination(this.projectsService.$model("projects"), {
            params: query,
            where: {}
        });
    }
    count() {
        return this.projectsService.$model("projects").countDocuments();
    }
    findOne(id) {
        let _id = new mongoose.Types.ObjectId(id);
        return this.projectsService.$model("projects")
            .findOne({ _id: _id })
            .populate({ path: 'products' })
            .populate({ path: 'bundles' })
            .populate({ path: 'rooms' })
            .populate({ path: 'houses' })
            .populate('style');
    }
    async upload(image, req) {
        let fileName = null;
        const input = _.merge(req.body, req.query);
        if (input.id) {
            fileName = `projects/${input.id}`;
        }
        let uploaded_image = null;
        for (const file of req.files) {
            uploaded_image = await this.minioClientService.upload(file, fileName);
        }
        return this.projectsService.$model("projects").findOneAndUpdate({ _id: input.id }, {
            image: _.get(uploaded_image, 'url', null)
        }, { new: true });
    }
    async delete(req) {
        const input = _.merge(req.body, req.query);
        const projects = await this.projectsService.$model("projects").findOne({ _id: input.id });
        const images = _.get(projects, 'image', '');
        let ext = images.substring(images.lastIndexOf('.'), images.length) || '.jpg';
        await this.minioClientService.delete(`projects/${input.id}${ext}`);
        return this.projectsService.$model("projects").findOneAndUpdate({ _id: input.id }, {
            image: null
        }, { new: true });
    }
    save(id, updateProjectDto) {
        if (!['0', 'create', 'add'].includes(id)) {
            return this.projectsService.$model("projects").findOneAndUpdate({ _id: id }, updateProjectDto, { new: true });
        }
        else {
            return this.projectsService.$model("projects").create(updateProjectDto);
        }
    }
    remove(id) {
        return this.projectsService.$model("projects").deleteOne({ _id: id }).exec();
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "count", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
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
], ProjectsController.prototype, "upload", null);
__decorate([
    (0, common_1.Delete)('upload'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "save", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService,
        minio_client_service_1.MinioClientService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map