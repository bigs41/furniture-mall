import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mixed, Document,ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Exclude, Transform, Type } from 'class-transformer';
import { Roles, RolesSchema } from './roles.schema';
import { Address,AddressSchema } from 'src/address/entities/address.schema';
export type UserDocument = User & Document;
@Schema({ timestamps: true })
export class User {
    @Transform(({ value }) => value.toString())
    _id: ObjectId;
    @Prop()
    firstName: String
    @Prop()
    lastName: String
    @Prop()
    userName: String
    @Prop({ default: 0 })
    gender: Number;
    @Prop({ type: mongoose.Schema.Types.Mixed, default: [] })
    interest_gender: any;
    @Prop()
    email: String;
    @Prop({ default: null })
    password: String;
    @Prop({ default: null })
    brithDay: String;
    @Prop({ default: 0 })
    age: Number;
    @Prop({ unique: true })
    phone_number: String;
    @Prop({ default: true })
    online_status: Boolean;
    @Prop({ default: false })
    validate_status: Boolean;
    @Prop({ default: "" })
    user_img_url: String;
    @Prop({ default: 0 })
    latitude: Number;
    @Prop({ default: 0 })
    longitude: Number;

    @Prop([{ type: mongoose.Schema.Types.ObjectId,ref:Roles.name, default: null }])
    @Type(() => Roles)
    roles: Roles;

    @Prop()
    address: [
        {
            name: String,
            description: String,
            address: String,
            subdistrict: String,
            road: String,
            id: String,
            geocode: String,
            district: String,
            province: String,
            country: String,
            postcode: Number,
            lat: Number,
            lon: Number,
            isDefault: Boolean,
            sort: Number
        }
    ];
}

export const UserSchema = SchemaFactory.createForClass(User)