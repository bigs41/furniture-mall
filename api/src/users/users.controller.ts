import { Controller, Get, UsePipes, ValidationPipe, Query, Body,Param, Post, Delete, UseFilters, Res, HttpException, HttpStatus, BadRequestException, UseInterceptors, UseGuards, Request,UploadedFile,StreamableFile } from '@nestjs/common';
import { DeleteUserDto, GetUserDto, OnlineLocationDto, UserDto } from './user.dto';
import { UsersService } from './users.service';

import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import  * as utils from '../helper/utils'
import  { MinioClientService } from 'src/helper/minio-client/minio-client.service'
import { BufferedFile } from 'src/helper/minio-client/file.model';
import * as fs from 'fs';
import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('users')
// @UseInterceptors(ResponseFormat)
export class UsersController {
    constructor(
        private userService: UsersService,
        private minioClientService: MinioClientService
    ) { }

    @Get('gen-pdf')
    async genPdf(@Request() req: any,@Res() res: any) {
        let html = fs.readFileSync("template/pdf.html", "utf8");
        var users = [
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
          ];
          let $pdf = await utils.pdfBuffer(html,users)
          res.contentType("application/pdf");
          return res.send($pdf);
    }


    @Post('set-roles')
    setRoles(@Body() body: any) {
        return this.userService.$model('roles').create(body)
    }
    @Post('set-permission')
    setPermission(@Body() body: any) {
        return this.userService.$model('permission').create(body)
    }
    @Post('set-role-permission')
    setRolePermission(@Body() body: any) {
        return this.userService.$model('rolePermission').create(body)
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getUserAll(@Request() req: any, @Query() query: QueryDto) {
        console.log(req.user);
        
        return utils.queryPagination(this.userService.$model('User'), {
            params: req.query
        })
    }
    @Get('/count')
    count(){
        return this.userService.$model('User').countDocuments()
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getUserOne(@Request() req: any, @Param('id') id: string) {
        if (['me'].includes(id)) {
            id = req.user._id
        }
        return await this.userService.get(id)
    }
    @Get('get/:id')
    async get(@Request() req: any, @Param('id') id: string) {
        return await this.userService.get(id)
    }

    @Get('getUser')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    getUser(@Query() obj: GetUserDto,@Request() req: any) 
    {
        let ans = this.userService.getUser(obj)
        return ans
    }

    @Post('setUser')
    @UsePipes(new ValidationPipe({ transform: true }))
    async setUser(@Query('_id') _id: String, @Body() object: UserDto,@Request() req: any,@UploadedFile() image: BufferedFile) {
        
        // for (const file of req.files) {
        //     let uploaded_image = await this.minioClientService.upload(file)
        // }
        // return 'success'
        let response
        if (_id) {
            response = this.userService.updateUser(_id, object)
            return response
        } else {
            // console.log(object.email);
            // utils.checkEmailVerify(object.email).then(async (res) => {
            //     console.log(res);
            response = this.userService.createUser(object)
            return response
        }
    }
    @Post(':id')
    async save(@Param('id') id: any, @Body() object: any,@Request() req: any,@UploadedFile() image: BufferedFile) {
        
        // for (const file of req.files) {
        //     let uploaded_image = await this.minioClientService.upload(file)
        // }
        delete object.password
        delete object.permission
        delete object.rolePermission
        object.roles = object.roles.map(item => {
            delete item.rolePermission
            return item
        })
        if(object.address){
            object.address  =  object.address.map(item => {
                delete item.$id
                return item
            });
        }
        if(!utils.empty(object.newPassword)){
            object.password = bcrypt.hashSync(object.newPassword, 10)
        }
        if (!['create','add','0'].includes(id)) {
            return this.userService.$model('User').update({ _id: id }, object)
        } else {
            return this.userService.$model('User').create(object)
        }
    }
    @Delete('deleteUser')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    deleteUser(@Query() object: DeleteUserDto) {
        let resp = this.userService.deleteUser(object)
        return resp
    }



    @Get('onlineLocation')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    onlineLocation(@Query() req: OnlineLocationDto) {
        let response = this.userService.onlineLocation(req)
        return response;
    }
}



