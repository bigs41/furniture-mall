import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as db from 'mongoose';
import { Transform, Type } from 'class-transformer';
export type HouseDocument = House & db.Document;
// House
@Schema()
export class House {
    @Transform(({ value }) => value.toString())
    _id: db.ObjectId;

    @Prop()
    name: string;

    @Prop()
    code: string;
        
    @Prop()
    status: boolean;

    @Prop()
    concept: string;
        
    @Prop()
    address: string;
        
    @Prop()
    website: string;

    @Prop()
    image: string;

    @Prop()
    imageMap: string;
        
    @Prop()
    description: string;
        
    @Prop()
    location: string;

    @Prop({ default: 0 })
    latitude: Number;

    @Prop({ default: 0 })
    longitude: Number;
}

export const HouseSchema = SchemaFactory.createForClass(House);