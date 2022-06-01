import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { User, UserDocument,UserSchema } from './users.schema';
import { Roles, RolesDocument,RolesSchema } from "./roles.schema";
import { Permission, PermissionDocument,PermissionSchema } from "./permission.schema";
import { RolePermission, RolePermissionDocument } from "./rolePermission.schema";
import { DeleteUserDto, GetUserDto, OnlineLocationDto, UserDto } from './user.dto';

import * as _ from 'lodash'
import * as bcrypt from 'bcrypt';
const collect = require('collect.js');
const saltOrRounds = 10;
import * as mongoosePaginate from 'mongoose-paginate-v2';

UserSchema.plugin(mongoosePaginate)
RolesSchema.plugin(mongoosePaginate)
PermissionSchema.plugin(mongoosePaginate)


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private ObjectModel: Model<UserDocument>,
        @InjectModel(User.name) private $UserModel: Model<UserDocument>,
        @InjectModel(Roles.name) private readonly $RolesModel: Model<RolesDocument>,
        @InjectModel(Permission.name) private readonly $PermissionModel: Model<PermissionDocument>,
        @InjectModel(RolePermission.name) private readonly $RolePermissionModel: Model<RolePermissionDocument>,
    ) { }
    query() {
        return this.ObjectModel
    }
    $model(model:any) {
        const modelName = `$${_.upperFirst(model)}Model`
        return this[modelName]
    }
    async createUser(createdDto: UserDto){
        if(createdDto.password){
            createdDto.password =  await bcrypt.hash(createdDto.password, saltOrRounds);
        }
        
        const createdObject = new this.ObjectModel(createdDto);
        await createdObject.populate('roles');
        let ans = await createdObject.save();
        return ans
    }
    async updateUser(_id: String, updateDto: UserDto) {

        return await this.ObjectModel.updateOne({ _id: _id }, updateDto)

    }
    async get($id) {
        // let ans = await this.$UserModel.findOne({ _id: $id })
        //     .populate({
        //         path: 'roles', options: { _recursed: true }, populate: {
        //             path: 'rolePermission', populate: {
        //                 path: 'permission'
        //             }
        //         }
        //     })
        
        let ans = await this.$UserModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId($id) } },
            { $lookup: { from: 'roles', localField: 'roles', foreignField: '_id', as: 'roles' } },
            { $lookup: { from: 'rolepermissions', localField: 'roles.rolePermission', foreignField: '_id', as: 'rolePermission' } },
            { $lookup: { from: 'permissions', localField: 'rolePermission.permission._id', foreignField: '_id', as: 'permission' } },
        ])
        ans = _.head(ans)
        ans['permission'] = collect(ans['permission']).map((item) => { 
            
            return collect(ans['rolePermission'])
                .filter(r => {
                    return r.permission._id.toString() === item._id.toString()
                })
                .map(r => { 
                    r.name = item.name
                    return r
                })
                .first()
        }).all()
        return ans
    }
    async getUser(getUserDto: GetUserDto | any): Promise<User[]> {
        let query = {}
        if (getUserDto.search) {
            query['$or'] = [
                { firstName: { $regex: getUserDto.search, $options: "i" } },
                { lastName: { $regex: getUserDto.search, $options: "i" } },
                { phone_number: { $regex: getUserDto.search, $options: "i" } },
            ]
        }
        if (getUserDto['_id']) {
            query["_id"] = (getUserDto['_id']);
        }
        if (getUserDto['phone_number']) {
            query['phone_number'] = getUserDto['phone_number']
        }

        let obj = await this.ObjectModel.find(query).limit(getUserDto.limit).skip(getUserDto.skip).exec();
        return obj

    }
    async deleteUser(deleteUserDto: DeleteUserDto) {
        let query = {}
        if (deleteUserDto['_id']) {
            query["_id"] = (deleteUserDto['_id']);
        }
        let ans = await this.ObjectModel.deleteOne({ "_id": deleteUserDto['_id'] })
        return ans
    }

    async onlineLocation(obj: OnlineLocationDto) {
        return await this.ObjectModel.findOneAndUpdate({ _id: obj._id }, obj)
    }

    async find(query, skip: number = 0, limit: number = 0) {
        let obj = await this.ObjectModel.find(query).skip(skip).limit(limit).exec();
        return obj

    }
    async aggregation(query) {
        let ans = await this.ObjectModel.aggregate(query)
        return ans
    }

}
