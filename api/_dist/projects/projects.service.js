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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const _ = require("lodash");
const $project = require("./entities/project.schema");
const $model = require("./entities/model.schema");
const $room = require("./entities/room.schema");
const $house = require("./entities/house.schema");
const $style = require("./entities/style.schema");
const mongoosePaginate = require("mongoose-paginate-v2");
$project.ProjectSchema.plugin(mongoosePaginate);
$room.RoomSchema.plugin(mongoosePaginate);
$house.HouseSchema.plugin(mongoosePaginate);
$style.StyleSchema.plugin(mongoosePaginate);
let ProjectsService = class ProjectsService {
    constructor($ProjectsModel, $ModelModel, $RoomModel, $HouseModel, $StyleModel) {
        this.$ProjectsModel = $ProjectsModel;
        this.$ModelModel = $ModelModel;
        this.$RoomModel = $RoomModel;
        this.$HouseModel = $HouseModel;
        this.$StyleModel = $StyleModel;
    }
    $model(model) {
        const modelName = `$${_.upperFirst(model)}Model`;
        return this[modelName];
    }
    create(createProjectDto) {
        return 'This action adds a new project';
    }
    findAll() {
        return `This action returns all projects`;
    }
    findOne(id) {
        return `This action returns a #${id} project`;
    }
    update(id, updateProjectDto) {
        return `This action updates a #${id} project`;
    }
    remove(id) {
        return `This action removes a #${id} project`;
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)($project.Project.name)),
    __param(1, (0, mongoose_2.InjectModel)($model.Model.name)),
    __param(2, (0, mongoose_2.InjectModel)($room.Room.name)),
    __param(3, (0, mongoose_2.InjectModel)($house.House.name)),
    __param(4, (0, mongoose_2.InjectModel)($style.Style.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map