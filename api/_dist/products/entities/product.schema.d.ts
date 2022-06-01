/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose-paginate-v2" />
import { Document } from 'mongoose';
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: number;
    producttype: number;
    name: string;
    description: string;
    sku: string;
    sellprice: string;
    purchaseprice: string;
    barcode: string;
    stock: string;
    availablestock: string;
    unittext: string;
    imagepath: string;
    weight: string;
    height: string;
    length: string;
    width: string;
    categoryid: number;
    category: string;
    variationid: string;
    variant: string;
    tag: [
        string
    ];
    sharelink: string;
    status: boolean;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any, any>, any, any>;
