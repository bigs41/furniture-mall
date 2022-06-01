import * as db from 'mongoose';
export declare type StyleDocument = Style & db.Document;
export declare class Style {
    _id: db.ObjectId;
    name: string;
    code: string;
    status: boolean;
}
export declare const StyleSchema: db.Schema<db.Document<Style, any, any>, db.Model<db.Document<Style, any, any>, any, any, any>, any, any>;
