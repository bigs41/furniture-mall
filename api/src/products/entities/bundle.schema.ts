import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';

export type BundleDocument = Bundle & Document;

@Schema()
export class Bundle {
    @Transform(({ value }) => value.toString())
  _id: ObjectId;
  @Prop()
  id:string
  @Prop()
  name:string
  @Prop()
  sku:string
  @Prop({default:'0'})
  sellprice:string
  @Prop()
  stock:string
  @Prop()
  availablestock:string
  @Prop()
  imagepath:string
  @Prop()
  imageList: [
    string     
  ]
  @Prop()
  active:boolean
  @Prop({default:true})
  status:boolean
  @Prop({default:[]})
  list: [
          {
              id: string
              name: string
              sku: string
              quantity: number
              weightPerUnit: number
              heightPerUnit: number
              lengthPerUnit: number
              widthPerUnit: number
          }
  ]
  @Prop({default:'0'})
  purchaseprice:string
}
export const BundleSchema = SchemaFactory.createForClass(Bundle);