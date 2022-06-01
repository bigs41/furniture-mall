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
export declare type AddressDocument = Address & Document;
export declare class Address {
    name: string;
    description: string;
    address: string;
    subdistrict: string;
    road: string;
    id: string;
    geocode: string;
    district: string;
    province: string;
    country: string;
    postcode: Number;
    lat: Number;
    lon: Number;
    isDefault: boolean;
    sort: Number;
}
export declare const AddressSchema: import("mongoose").Schema<Document<Address, any, any>, import("mongoose").Model<Document<Address, any, any>, any, any, any>, any, any>;
