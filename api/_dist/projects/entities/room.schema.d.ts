import { Document, ObjectId } from 'mongoose';
import { Product } from '../../products/entities/product.schema';
import { Bundle } from '../../products/entities/bundle.schema';
import * as db from 'mongoose';
export declare type RoomDocument = Room & Document;
export declare class Room {
    _id: ObjectId;
    code: string;
    name: string;
    status: boolean;
    sellpricetotal: string;
    sellprice: string;
    stock: string;
    availablestock: string;
    images: [
        string
    ];
    products: Product[];
    bundles: Bundle[];
}
export declare const RoomSchema: db.Schema<Document<Room, any, any>, db.Model<Document<Room, any, any>, any, any, any>, any, any>;
