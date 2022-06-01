import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';

export type CollectionDocument = Collection & Document;

@Schema()
export class Collection {
    @Transform(({ value }) => value.toString())
  _id: ObjectId;
  @Prop()
  sku:string
  @Prop()
  name:string
  description:string
  @Prop()
  sellprice:string
  @Prop()
  purchaseprice:string
  @Prop()
  tag: string;
  @Prop()
  sharelink: string;
}
export const CollectionSchema = SchemaFactory.createForClass(Collection);