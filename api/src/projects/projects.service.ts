import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';
import * as $project from "./entities/project.schema";
import * as $model from "./entities/model.schema";
import * as $room from "./entities/room.schema";
import * as $house from "./entities/house.schema";
import * as $style from "./entities/style.schema";
import * as mongoosePaginate from 'mongoose-paginate-v2';

$project.ProjectSchema.plugin(mongoosePaginate)
$room.RoomSchema.plugin(mongoosePaginate)
$house.HouseSchema.plugin(mongoosePaginate)
$style.StyleSchema.plugin(mongoosePaginate)

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel($project.Project.name) private readonly $ProjectsModel: Model<$project.ProjectDocument>,
    @InjectModel($model.Model.name) private readonly $ModelModel: Model<$model.ModelDocument>,
    @InjectModel($room.Room.name) private readonly $RoomModel: Model<$room.RoomDocument>,
    @InjectModel($house.House.name) private readonly $HouseModel: Model<$house.HouseDocument>,
    @InjectModel($style.Style.name) private readonly $StyleModel: Model<$style.StyleDocument>,
  ) { }
  $model(model:any) {
    const modelName = `$${_.upperFirst(model)}Model`
    return this[modelName]
  }
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
