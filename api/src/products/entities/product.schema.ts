import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id:number
  @Prop()
  producttype:number
  @Prop()
  name:string
  @Prop()
  description:string
  @Prop()
  sku:string
  @Prop()
  sellprice:string
  @Prop()
  purchaseprice:string

  @Prop()
  barcode: string;

  @Prop()
  stock: string;

  @Prop()
  availablestock: string;

  @Prop()
  unittext: string;

  @Prop()
  imagepath: string;

  @Prop()
  weight: string;

  @Prop()
  height: string;

  @Prop()
  length: string;

  @Prop()
  width: string;

  @Prop()
  categoryid: number;

  @Prop()
  category: string;

  @Prop()
  variationid: string;

  @Prop()
  variant: string;

  @Prop()
  tag: [
    string
  ];

  @Prop()
  sharelink: string;

  @Prop({default:true})
  status: boolean;
}
export const ProductSchema = SchemaFactory.createForClass(Product);