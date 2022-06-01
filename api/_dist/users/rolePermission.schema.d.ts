import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Permission } from './permission.schema';
export declare type RolePermissionDocument = RolePermission & Document;
export declare class RolePermission {
    _id: ObjectId;
    permission: Permission;
    create: boolean;
    read: boolean;
    edit: boolean;
    remove: boolean;
}
export declare const RolePermissionSchema: mongoose.Schema<Document<RolePermission, any, any>, mongoose.Model<Document<RolePermission, any, any>, any, any, any>, any, any>;
