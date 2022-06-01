import { Controller, Get, Post, Body, Patch, Param, Delete, Query,UploadedFile,Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import * as mongoose from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiConsumes,ApiBody } from '@nestjs/swagger';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import  { MinioClientService } from 'src/helper/minio-client/minio-client.service'
import { BufferedFile } from 'src/helper/minio-client/file.model';
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly minioClientService: MinioClientService
  ) { }

  // @Post()
  // @ApiConsumes('multipart/form-data')
  // @ApiConsumes('application/json')
  // create(@Body() createProjectDto: CreateProjectDto) {
  //   return this.projectsService.$model("projects").create(createProjectDto);
  // }

  // @Post('model')
  // @ApiConsumes('multipart/form-data')
  // @ApiConsumes('application/json')
  // addModel(@Body() body: any) {
  //   return this.projectsService.$model("model").create(body);
  // }

  // @Get('model/:id')
  // getModel(@Param('id') id: string) {
  //   return this.projectsService.$model("model").findOne({_id: id}).populate(['product', 'project']).exec();
  // }

  @Get()
  findAll(@Query() query: QueryDto) {
    return help.queryPagination(this.projectsService.$model("projects"), {
      params: query,
      where: {}
    });
  }

  @Get('/count')
  count() {
    return this.projectsService.$model("projects").countDocuments();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let _id = new mongoose.Types.ObjectId(id);
    return this.projectsService.$model("projects")
      .findOne({ _id: _id })
      .populate({ path: 'products' })
      .populate({ path: 'bundles' })
      .populate({ path: 'rooms' })
      .populate({ path: 'houses' })
      .populate('style')
    
  }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async upload(@UploadedFile() image: BufferedFile, @Req() req: any) {
    let fileName = null
    const input = _.merge(req.body, req.query)
      if (input.id) {
          fileName = `projects/${input.id}`
    }
    
      let uploaded_image = null
      for (const file of req.files) {
          uploaded_image = await this.minioClientService.upload(file,fileName)
      }
      return this.projectsService.$model("projects").findOneAndUpdate({ _id: input.id }, {
          image: _.get(uploaded_image,'url',null)
      }, { new: true });
  }
  @Delete('upload')
  async delete(@Req() req: any) { 
      const input = _.merge(req.body, req.query)
      const projects = await this.projectsService.$model("projects").findOne({ _id: input.id })
      const images = _.get(projects, 'image', '')
      
      let ext = images.substring(images.lastIndexOf('.'), images.length)||'.jpg';
      await this.minioClientService.delete(`projects/${input.id}${ext}`)
      return this.projectsService.$model("projects").findOneAndUpdate({ _id: input.id }, {
          image: null
      }, { new: true });
  }

  @Post(':id')
  save(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    // const products = _.get(updateProjectDto, 'products', []).map(x => x._id);
    // _.set(updateProjectDto, 'products', products)
    
    if (!['0', 'create', 'add'].includes(id)) {
      return this.projectsService.$model("projects").findOneAndUpdate({ _id: id }, updateProjectDto, { new: true });
    } else {
      return this.projectsService.$model("projects").create(updateProjectDto);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.$model("projects").deleteOne({ _id: id }).exec();
  }
}
