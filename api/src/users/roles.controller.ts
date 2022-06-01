import { Controller, Get, UsePipes, ValidationPipe, Query, Body,Param, Post, Delete, UseFilters, Res,Req, HttpException, HttpStatus, BadRequestException, UseInterceptors, UseGuards, Request,UploadedFile } from '@nestjs/common';
import { DeleteUserDto, GetUserDto, OnlineLocationDto, UserDto } from './user.dto';
import { UsersService } from './users.service';
import * as mongoose from 'mongoose';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import  * as help from '../helper/utils'
import  { MinioClientService } from 'src/helper/minio-client/minio-client.service'
import { BufferedFile } from 'src/helper/minio-client/file.model';
import * as fs from 'fs';
import * as _ from 'lodash';
const collect = require('collect.js');
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('roles')
@UseInterceptors(ResponseFormat)
export class RolesController {
    constructor(
        private userService: UsersService,
        private minioClientService: MinioClientService
    ) { }
    @Post('set-role-permission')
    setRolePermission(@Body() body: any) {
        return this.userService.$model('rolePermission').create(body)
    }
    @Post('set-roles')
    setRoles(@Body() body: any) {
        return this.userService.$model('roles').create(body)
    }
    @Get()
    async getRoles(@Req() req: any, @Query() query: QueryDto) {
        return await help.queryPagination(this.userService.$model('Roles'), {
            params: req.query
        });
    }
    
    @Get(':id')
    async getRole(@Param('id') id: string, @Req() req: any) {
        if (!['0', 'create', 'add'].includes(id)) {
                const $permissions = collect(JSON.parse(JSON.stringify(await this.userService.$model('Permission').find()))).map(r => {
                    r.create=false
                    r.read=false
                    r.edit=false
                    r.remove = false
                    r.permission = {
                        _id:r._id
                    }
                    return r
                }).all()
            
                let $return = await this.userService.$model('Roles').aggregate([
                    { $match: { _id: new mongoose.Types.ObjectId(id) } },
                    { $lookup: { from: 'rolepermissions', localField: 'rolePermission', foreignField: '_id', as: 'rolePermission' } },
                    { $lookup: { from: 'permissions', localField: 'rolePermission.permission._id', foreignField: '_id', as: 'permissions' } }
                ])
                $return = collect(JSON.parse(JSON.stringify($return)))
                    .map(item => {
                        item.permissions = collect(item.permissions).map(function (permission) {
                            permission = _.merge(collect(item.rolePermission).filter(function (role) {
                                return role.permission._id == permission._id
                            }).map(role => {
                                role.rolePermission_id = role._id
                                return role
                            }).first(), permission)
                            
                            return permission
                        }).merge($permissions).unique('_id').all()
                        return item

                    })
                .first()
                
                return $return
        } else {
            let $return = {
                name: '',
                permissions: collect(JSON.parse(JSON.stringify(await this.userService.$model('Permission').find()))).map(r => {
                    r.create=false
                    r.read=false
                    r.edit=false
                    r.remove = false
                    r.permission = {
                        _id:r._id
                    }
                    return r
                }).all()
            }
            return $return
        }
        
    }
    @Post(':id')
    async saveRoles(@Body() body: any, @Param('id') id: string) {
        if (!['0', 'create', 'add'].includes(id)) {
            let rolePermission_id = []
            for (const iterator of body.permissions) {
                iterator.create = help.getBoolean(iterator.create);
                iterator.edit = help.getBoolean(iterator.edit);
                iterator.read = help.getBoolean(iterator.read);
                iterator.remove = help.getBoolean(iterator.remove);
                if (!help.empty(iterator.rolePermission_id)) { 
                    await this.userService.$model('rolePermission').updateOne({
                        _id: new mongoose.Types.ObjectId(iterator.rolePermission_id)
                    }, help.only(iterator, ['permission', 'create', 'edit', 'read', 'remove']))
                    rolePermission_id.push(iterator.rolePermission_id)
                } else {
                    const rolePerm = await this.userService.$model('rolePermission').create(help.only(iterator, ['permission', 'create', 'edit', 'read', 'remove']))
                    rolePermission_id.push(rolePerm._id)
                }
            }
            
            return await this.userService.$model('Roles').updateOne({
                _id: new mongoose.Types.ObjectId(id)
            }, {
                name: body.name,
                rolePermission: rolePermission_id
            })
        } else {
            let rolePermission_id = []
            for (const iterator of body.permissions) { 
                iterator.create = help.getBoolean(iterator.create);
                iterator.edit = help.getBoolean(iterator.edit);
                iterator.read = help.getBoolean(iterator.read);
                iterator.remove = help.getBoolean(iterator.remove);
                const rolePerm = await this.userService.$model('rolePermission').create(help.only(iterator, ['permission', 'create', 'edit', 'read', 'remove']))
                rolePermission_id.push(rolePerm._id)
            }
            return await this.userService.$model('Roles').create({
                name: body.name,
                rolePermission: rolePermission_id
            })
        }
    }
}



