import * as db from 'mongoose';
export declare type HouseDocument = House & db.Document;
export declare class House {
    _id: db.ObjectId;
    name: string;
    code: string;
    status: boolean;
    concept: string;
    address: string;
    website: string;
    image: string;
    imageMap: string;
    description: string;
    location: string;
    latitude: Number;
    longitude: Number;
}
export declare const HouseSchema: db.Schema<db.Document<House, any, any>, db.Model<db.Document<House, any, any>, any, any, any>, any, any>;
