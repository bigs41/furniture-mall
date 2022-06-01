import { Controller, Get, Post, Body, Patch, Param, Delete, Query,UploadedFile, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import * as mongoose from 'mongoose';
import { ApiConsumes,ApiBody } from '@nestjs/swagger';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import  { MinioClientService } from 'src/helper/minio-client/minio-client.service'
import { BufferedFile } from 'src/helper/minio-client/file.model';
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('houses')
export class HousesController {
    constructor(
        private readonly projectsService: ProjectsService,
        private readonly minioClientService: MinioClientService
    ) { }

    @Get()
    async findAll(@Query() query: QueryDto) { 
        return help.queryPagination(this.projectsService.$model("house"), {
            params: query,
            where: {}
          });
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.projectsService.$model("house").findOne({ _id: id })
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
        const input = _.merge(req.body, req.query)
        let fileName = null
        if (input.id) {
            fileName = `${input.id}`
        }
        let uploaded_image = {}
        for (const file of req.files) {
            const $tmp = await this.minioClientService.upload(file, `house/${fileName}/${file.fieldname}`)
            uploaded_image[file.fieldname] = _.get($tmp,'url',null)
        }
        return this.projectsService.$model("house").findOneAndUpdate({ _id: input.id }, uploaded_image, { new: true });
    }
    @Delete('upload')
    async delete(@Req() req: any) { 
        const input = _.merge(req.body, req.query)
        const room = await this.projectsService.$model("house").findOne({ _id: input.id })
        let fieldname = (input.q).split(',')
        let uploaded = {}
        for (let index = 0; index < fieldname.length; index++) {
            try {
                const element = fieldname[index];
                const ext = room[element].substring(room[element].lastIndexOf('.'), room[element].length) || '.jpg';
                await this.minioClientService.delete(`house/${input.id}/${element}${ext}`)
                uploaded[element] = null;
            } catch (error) {
                
            }
        }
        return await this.projectsService.$model("house").findOneAndUpdate({ _id: input.id }, uploaded, { new: true });
    }
    @Post(':id')
    async create(@Param('id') id: string, @Body() body: any) {
        if (['create', 'add', '0'].includes(id)) {
            return this.projectsService.$model("house").create(body);
        } else {
            return this.projectsService.$model("house").findOneAndUpdate({ _id: id }, body, { new: true });
        }
    }
    
}
