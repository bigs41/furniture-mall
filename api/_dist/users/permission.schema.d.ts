/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose-paginate-v2" />
import { Document, ObjectId } from 'mongoose';
export declare type PermissionDocument = Permission & Document;
export declare class Permission {
    _id: ObjectId;
    name: string;
    link: string;
    code: string;
}
export declare const PermissionSchema: import("mongoose").Schema<Document<Permission, any, any>, import("mongoose").Model<Document<Permission, any, any>, any, any, any>, any, any>;
