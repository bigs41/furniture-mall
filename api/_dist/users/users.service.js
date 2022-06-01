"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const users_schema_1 = require("./users.schema");
const roles_schema_1 = require("./roles.schema");
const permission_schema_1 = require("./permission.schema");
const rolePermission_schema_1 = require("./rolePermission.schema");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const collect = require('collect.js');
const saltOrRounds = 10;
const mongoosePaginate = require("mongoose-paginate-v2");
users_schema_1.UserSchema.plugin(mongoosePaginate);
roles_schema_1.RolesSchema.plugin(mongoosePaginate);
permission_schema_1.PermissionSchema.plugin(mongoosePaginate);
let UsersService = class UsersService {
    constructor(ObjectModel, $UserModel, $RolesModel, $PermissionModel, $RolePermissionModel) {
        this.ObjectModel = ObjectModel;
        this.$UserModel = $UserModel;
        this.$RolesModel = $RolesModel;
        this.$PermissionModel = $PermissionModel;
        this.$RolePermissionModel = $RolePermissionModel;
    }
    query() {
        return this.ObjectModel;
    }
    $model(model) {
        const modelName = `$${_.upperFirst(model)}Model`;
        return this[modelName];
    }
    async createUser(createdDto) {
        if (createdDto.password) {
            createdDto.password = await bcrypt.hash(createdDto.password, saltOrRounds);
        }
        const createdObject = new this.ObjectModel(createdDto);
        await createdObject.populate('roles');
        let ans = await createdObject.save();
        return ans;
    }
    async updateUser(_id, updateDto) {
        return await this.ObjectModel.updateOne({ _id: _id }, updateDto);
    }
    async get($id) {
        let ans = await this.$UserModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId($id) } },
            { $lookup: { from: 'roles', localField: 'roles', foreignField: '_id', as: 'roles' } },
            { $lookup: { from: 'rolepermissions', localField: 'roles.rolePermission', foreignField: '_id', as: 'rolePermission' } },
            { $lookup: { from: 'permissions', localField: 'rolePermission.permission._id', foreignField: '_id', as: 'permission' } },
        ]);
        ans = _.head(ans);
        ans['permission'] = collect(ans['permission']).map((item) => {
            return collect(ans['rolePermission'])
                .filter(r => {
                return r.permission._id.toString() === item._id.toString();
            })
                .map(r => {
                r.name = item.name;
                return r;
            })
                .first();
        }).all();
        return ans;
    }
    async getUser(getUserDto) {
        let query = {};
        if (getUserDto.search) {
            query['$or'] = [
                { firstName: { $regex: getUserDto.search, $options: "i" } },
                { lastName: { $regex: getUserDto.search, $options: "i" } },
                { phone_number: { $regex: getUserDto.search, $options: "i" } },
            ];
        }
        if (getUserDto['_id']) {
            query["_id"] = (getUserDto['_id']);
        }
        if (getUserDto['phone_number']) {
            query['phone_number'] = getUserDto['phone_number'];
        }
        let obj = await this.ObjectModel.find(query).limit(getUserDto.limit).skip(getUserDto.skip).exec();
        return obj;
    }
    async deleteUser(deleteUserDto) {
        let query = {};
        if (deleteUserDto['_id']) {
            query["_id"] = (deleteUserDto['_id']);
        }
        let ans = await this.ObjectModel.deleteOne({ "_id": deleteUserDto['_id'] });
        return ans;
    }
    async onlineLocation(obj) {
        return await this.ObjectModel.findOneAndUpdate({ _id: obj._id }, obj);
    }
    async find(query, skip = 0, limit = 0) {
        let obj = await this.ObjectModel.find(query).skip(skip).limit(limit).exec();
        return obj;
    }
    async aggregation(query) {
        let ans = await this.ObjectModel.aggregate(query);
        return ans;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(roles_schema_1.Roles.name)),
    __param(3, (0, mongoose_1.InjectModel)(permission_schema_1.Permission.name)),
    __param(4, (0, mongoose_1.InjectModel)(rolePermission_schema_1.RolePermission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map