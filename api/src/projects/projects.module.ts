import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { RoomsController } from './rooms.controller';
import { HousesController } from './houses.controller';
import { StylesController } from './styles.controller';
import * as $project from "./entities/project.schema";
import * as $model from "./entities/model.schema";
import * as $room from "./entities/room.schema";
import * as $house from "./entities/house.schema";
import * as $style from "./entities/style.schema";
import { MinioClientModule } from 'src/helper/minio-client/minio-client.module';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: $project.Project.name, schema: $project.ProjectSchema },
      { name: $model.Model.name, schema: $model.ModelSchema },
      { name: $room.Room.name, schema: $room.RoomSchema },
      { name: $house.House.name, schema: $house.HouseSchema },
      { name: $style.Style.name, schema: $style.StyleSchema }
    ]),
    MinioClientModule
  ],
  controllers: [ProjectsController,RoomsController,HousesController,StylesController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
