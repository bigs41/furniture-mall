import { Document, ObjectId } from 'mongoose';
import * as db from 'mongoose';
import { Product } from 'src/products/entities/product.schema';
import { User } from 'src/users/users.schema';
export declare type CartDocument = Cart & Document;
export declare class Cart {
    _id: ObjectId;
    user: User;
    product: Product;
    code: string;
    id: string;
    quantity: number;
    type: string;
    json: string;
}
export declare const CartSchema: db.Schema<Document<Cart, any, any>, db.Model<Document<Cart, any, any>, any, any, any>, any, any>;
