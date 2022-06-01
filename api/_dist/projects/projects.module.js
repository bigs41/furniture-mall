"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const projects_service_1 = require("./projects.service");
const projects_controller_1 = require("./projects.controller");
const rooms_controller_1 = require("./rooms.controller");
const houses_controller_1 = require("./houses.controller");
const styles_controller_1 = require("./styles.controller");
const $project = require("./entities/project.schema");
const $model = require("./entities/model.schema");
const $room = require("./entities/room.schema");
const $house = require("./entities/house.schema");
const $style = require("./entities/style.schema");
const minio_client_module_1 = require("../helper/minio-client/minio-client.module");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: $project.Project.name, schema: $project.ProjectSchema },
                { name: $model.Model.name, schema: $model.ModelSchema },
                { name: $room.Room.name, schema: $room.RoomSchema },
                { name: $house.House.name, schema: $house.HouseSchema },
                { name: $style.Style.name, schema: $style.StyleSchema }
            ]),
            minio_client_module_1.MinioClientModule
        ],
        controllers: [projects_controller_1.ProjectsController, rooms_controller_1.RoomsController, houses_controller_1.HousesController, styles_controller_1.StylesController],
        providers: [projects_service_1.ProjectsService]
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map