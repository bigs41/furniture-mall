import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as db from 'mongoose';
import { Transform, Type } from 'class-transformer';
export type StyleDocument = Style & db.Document;
// Style
@Schema()
export class Style {
    @Transform(({ value }) => value.toString())
    _id: db.ObjectId;

    @Prop()
    name: string;

    @Prop()
    code: string;
        
    @Prop()
    status: boolean;
}

export const StyleSchema = SchemaFactory.createForClass(Style);