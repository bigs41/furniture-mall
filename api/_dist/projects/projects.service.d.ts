import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Model } from 'mongoose';
import * as $project from "./entities/project.schema";
import * as $model from "./entities/model.schema";
import * as $room from "./entities/room.schema";
import * as $house from "./entities/house.schema";
import * as $style from "./entities/style.schema";
export declare class ProjectsService {
    private readonly $ProjectsModel;
    private readonly $ModelModel;
    private readonly $RoomModel;
    private readonly $HouseModel;
    private readonly $StyleModel;
    constructor($ProjectsModel: Model<$project.ProjectDocument>, $ModelModel: Model<$model.ModelDocument>, $RoomModel: Model<$room.RoomDocument>, $HouseModel: Model<$house.HouseDocument>, $StyleModel: Model<$style.StyleDocument>);
    $model(model: any): any;
    create(createProjectDto: CreateProjectDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProjectDto: UpdateProjectDto): string;
    remove(id: number): string;
}
