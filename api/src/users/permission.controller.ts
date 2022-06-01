import { Controller, Get, UsePipes, ValidationPipe, Query, Body,Param, Post, Delete, UseFilters, Res,Req, HttpException, HttpStatus, BadRequestException, UseInterceptors, UseGuards, Request,UploadedFile } from '@nestjs/common';
import { DeleteUserDto, GetUserDto, OnlineLocationDto, UserDto } from './user.dto';
import { UsersService } from './users.service';

import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import  * as help from '../helper/utils'
import  { MinioClientService } from 'src/helper/minio-client/minio-client.service'
import { BufferedFile } from 'src/helper/minio-client/file.model';
import * as fs from 'fs';
import * as _ from 'lodash';
import { update } from 'lodash';
const collect = require('collect.js');
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('permission')
@UseInterceptors(ResponseFormat)
export class PermissionController {
    constructor(
        private userService: UsersService,
        private minioClientService: MinioClientService
    ) { }

    @Get()
    async getRoles(@Req() req: any, @Query() query: QueryDto) {
        return await help.queryPagination(this.userService.$model('Permission'), {
            params: req.query
        });
    }
    
    @Get(':id')
    async getRole(@Param('id') id: string, @Req() req: any) {
        return this.userService.$model('Permission').findById(id)
        
    }

    @Post(':id')
    async updatePermission(@Param('id') id: string, @Body() body: any) {
        if (!['0', 'create', 'add'].includes(id)) {
            return this.userService.$model('Permission').update({_id:id},body)
        } else {
            return this.userService.$model('Permission').create(body)
        }
    }
    
    @Delete(':id')
    async deletePermission(@Param('id') id: string) {
        return this.userService.$model('Permission').deleteOne({_id:id})
    }
}