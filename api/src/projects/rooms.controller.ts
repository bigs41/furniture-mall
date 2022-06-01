import { Controller, Get, Post, Body, Patch, Param, Delete, Query,UploadedFile, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import * as mongoose from 'mongoose';
import { ApiConsumes,ApiBody } from '@nestjs/swagger';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import  { MinioClientService } from 'src/helper/minio-client/minio-client.service'
import { BufferedFile } from 'src/helper/minio-client/file.model';
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('rooms')
export class RoomsController {
    constructor(
        private readonly projectsService: ProjectsService,
        private readonly minioClientService: MinioClientService
    ) { }

    @Get()
    async findAll(@Query() query: QueryDto) { 
        return help.queryPagination(this.projectsService.$model("room"), {
            params: query,
            where: {}
          });
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.projectsService.$model("room").findOne({ _id: id })
            .populate({ path: 'products' })
            .populate({ path: 'bundles' });
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
        if (req.body.id) {
            fileName = `room/${req.body.id}`
        }
        let uploaded_image = null
        for (const file of req.files) {
            uploaded_image = await this.minioClientService.upload(file,fileName)
        }
        return this.projectsService.$model("room").findOneAndUpdate({ _id: req.body.id }, {
            images: [
                _.get(uploaded_image,'url',null)
            ]
        }, { new: true });
    }
    @Delete('upload')
    async delete(@Req() req: any) { 
        const input = _.merge(req.body, req.query)
        const room = await this.projectsService.$model("room").findOne({ _id: input.id })
        const images = _.get(room, 'images.0', '')
        
        let ext = images.substring(images.lastIndexOf('.'), images.length)||'.jpg';
        await this.minioClientService.delete(`room/${input.id}${ext}`)
        return this.projectsService.$model("room").findOneAndUpdate({ _id: input.id }, {
            images: []
        }, { new: true });
    }
    @Post(':id')
    async create(@Param('id') id: string, @Body() body: any) {

        if (['create', 'add', '0'].includes(id)) {
            return this.projectsService.$model("room").create(body);
        } else {
            return this.projectsService.$model("room").findOneAndUpdate({ _id: id }, body, { new: true });
        }
    }
}
