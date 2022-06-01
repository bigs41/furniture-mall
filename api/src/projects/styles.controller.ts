import { Controller, Get, Post, Body, Patch, Param, Delete, Query,UploadedFile, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import * as mongoose from 'mongoose';
import { ApiConsumes } from '@nestjs/swagger';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('styles')
export class StylesController {
    constructor(
        private readonly projectsService: ProjectsService,
    ) { }

    @Get()
    async findAll(@Query() query: QueryDto) { 
        return help.queryPagination(this.projectsService.$model("style"), {
            params: query,
            where: {}
          });
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.projectsService.$model("style").findOne({ _id: id })
    }

    @Post(':id')
    async create(@Param('id') id: string, @Body() body: any) {
        if (['create', 'add', '0'].includes(id)) {
            return this.projectsService.$model("style").create(body);
        } else {
            return this.projectsService.$model("style").findOneAndUpdate({ _id: id }, body, { new: true });
        }
    }
    
}
