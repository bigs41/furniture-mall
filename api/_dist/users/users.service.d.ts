import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { User, UserDocument } from './users.schema';
import { RolesDocument } from "./roles.schema";
import { PermissionDocument } from "./permission.schema";
import { RolePermissionDocument } from "./rolePermission.schema";
import { DeleteUserDto, GetUserDto, OnlineLocationDto, UserDto } from './user.dto';
export declare class UsersService {
    private ObjectModel;
    private $UserModel;
    private readonly $RolesModel;
    private readonly $PermissionModel;
    private readonly $RolePermissionModel;
    constructor(ObjectModel: Model<UserDocument>, $UserModel: Model<UserDocument>, $RolesModel: Model<RolesDocument>, $PermissionModel: Model<PermissionDocument>, $RolePermissionModel: Model<RolePermissionDocument>);
    query(): Model<UserDocument, {}, {}, {}>;
    $model(model: any): any;
    createUser(createdDto: UserDto): Promise<User & mongoose.Document<any, any, any> & {
        _id: any;
    }>;
    updateUser(_id: String, updateDto: UserDto): Promise<import("mongodb").UpdateResult>;
    get($id: any): Promise<any[]>;
    getUser(getUserDto: GetUserDto | any): Promise<User[]>;
    deleteUser(deleteUserDto: DeleteUserDto): Promise<import("mongodb").DeleteResult>;
    onlineLocation(obj: OnlineLocationDto): Promise<User & mongoose.Document<any, any, any> & {
        _id: any;
    }>;
    find(query: any, skip?: number, limit?: number): Promise<(User & mongoose.Document<any, any, any> & {
        _id: any;
    })[]>;
    aggregation(query: any): Promise<any[]>;
}
