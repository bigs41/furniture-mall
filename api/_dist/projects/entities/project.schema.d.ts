import * as db from 'mongoose';
import { Product } from 'src/products/entities/product.schema';
import { Bundle } from 'src/products/entities/bundle.schema';
import { Room } from 'src/projects/entities/room.schema';
import { House } from 'src/projects/entities/house.schema';
import { Style } from 'src/projects/entities/style.schema';
export declare type ProjectDocument = Project & db.Document;
export declare class Project {
    _id: db.ObjectId;
    code: string;
    name: string;
    uri: string;
    description: string;
    type: string;
    area: number;
    style: Style;
    image: string;
    status: boolean;
    sellpricetotal: string;
    sellprice: string;
    stock: string;
    availablestock: string;
    products: Product[];
    bundles: Bundle[];
    rooms: Room[];
    houses: House[];
}
export declare const ProjectSchema: db.Schema<db.Document<Project, any, any>, db.Model<db.Document<Project, any, any>, any, any, any>, any, any>;
