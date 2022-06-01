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
export declare type CategoryDocument = Category & Document;
export declare class Category {
    _id: ObjectId;
    id: string;
    name: string;
}
export declare const CategorySchema: import("mongoose").Schema<Document<Category, any, any>, import("mongoose").Model<Document<Category, any, any>, any, any, any>, any, any>;
