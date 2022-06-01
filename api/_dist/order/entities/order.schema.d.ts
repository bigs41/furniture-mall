import { Document, ObjectId } from 'mongoose';
import * as db from 'mongoose';
import { Product } from 'src/products/entities/product.schema';
import { User } from 'src/users/users.schema';
export declare type OrderDocument = Order & Document;
export declare class Order {
    _id: ObjectId;
    name: string;
    code: string;
    description: string;
    order: [
        {
            _id: ObjectId;
            name: string;
            code: string;
            description: string;
            price: number;
            quantity: number;
        }
    ];
    user: User;
    products: Product[];
}
export declare const OrderSchema: db.Schema<Document<Order, any, any>, db.Model<Document<Order, any, any>, any, any, any>, any, any>;
