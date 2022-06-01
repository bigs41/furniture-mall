import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { RolePermission } from './rolePermission.schema';
export declare type RolesDocument = Roles & Document;
export declare class Roles {
    _id: ObjectId;
    name: string;
    code: string;
    rolePermission: RolePermission;
}
export declare const RolesSchema: mongoose.Schema<Document<Roles, any, any>, mongoose.Model<Document<Roles, any, any>, any, any, any>, any, any>;
