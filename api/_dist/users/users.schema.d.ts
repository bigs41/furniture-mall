import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Roles } from './roles.schema';
export declare type UserDocument = User & Document;
export declare class User {
    _id: ObjectId;
    firstName: String;
    lastName: String;
    userName: String;
    gender: Number;
    interest_gender: any;
    email: String;
    password: String;
    brithDay: String;
    age: Number;
    phone_number: String;
    online_status: Boolean;
    validate_status: Boolean;
    user_img_url: String;
    latitude: Number;
    longitude: Number;
    roles: Roles;
    address: [
        {
            name: String;
            description: String;
            address: String;
            subdistrict: String;
            road: String;
            id: String;
            geocode: String;
            district: String;
            province: String;
            country: String;
            postcode: Number;
            lat: Number;
            lon: Number;
            isDefault: Boolean;
            sort: Number;
        }
    ];
}
export declare const UserSchema: mongoose.Schema<Document<User, any, any>, mongoose.Model<Document<User, any, any>, any, any, any>, any, any>;
