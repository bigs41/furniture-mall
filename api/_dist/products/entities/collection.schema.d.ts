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
export declare type CollectionDocument = Collection & Document;
export declare class Collection {
    _id: ObjectId;
    sku: string;
    name: string;
    description: string;
    sellprice: string;
    purchaseprice: string;
    tag: string;
    sharelink: string;
}
export declare const CollectionSchema: import("mongoose").Schema<Document<Collection, any, any>, import("mongoose").Model<Document<Collection, any, any>, any, any, any>, any, any>;
