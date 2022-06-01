import * as db from 'mongoose';
import { Product } from 'src/products/entities/product.schema';
import { Project } from './project.schema';
export declare type ModelDocument = Model & db.Document;
export declare class Model {
    _id: db.ObjectId;
    name: string;
    code: string;
    description: string;
    product: Product;
    project: Project;
}
export declare const ModelSchema: db.Schema<db.Document<Model, any, any>, db.Model<db.Document<Model, any, any>, any, any, any>, any, any>;
