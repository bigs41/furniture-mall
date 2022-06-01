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
export declare type BundleDocument = Bundle & Document;
export declare class Bundle {
    _id: ObjectId;
    id: string;
    name: string;
    sku: string;
    sellprice: string;
    stock: string;
    availablestock: string;
    imagepath: string;
    imageList: [
        string
    ];
    active: boolean;
    status: boolean;
    list: [
        {
            id: string;
            name: string;
            sku: string;
            quantity: number;
            weightPerUnit: number;
            heightPerUnit: number;
            lengthPerUnit: number;
            widthPerUnit: number;
        }
    ];
    purchaseprice: string;
}
export declare const BundleSchema: import("mongoose").Schema<Document<Bundle, any, any>, import("mongoose").Model<Document<Bundle, any, any>, any, any, any>, any, any>;
