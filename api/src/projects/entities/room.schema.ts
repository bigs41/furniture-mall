import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Product } from '../../products/entities/product.schema';
import { Category } from '../../products/entities/category.schema';
import { Bundle } from '../../products/entities/bundle.schema';
import * as db from 'mongoose';
  
export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Transform(({ value }) => value.toString())
  _id: ObjectId;
  @Prop()
  code:string
  @Prop()
  name:string
  @Prop({default:false})
  status:boolean
  @Prop()
  sellpricetotal:string
  @Prop()
  sellprice:string
  @Prop()
  stock: string;
  @Prop()
  availablestock: string;
  @Prop({default:[]})
  images: [
    string
    ]
  @Prop([{ type: db.Schema.Types.ObjectId, ref: Product.name }])
  @Type(() => Product)
  products: Product[];
  @Prop([{ type: db.Schema.Types.ObjectId, ref: Bundle.name }])
  @Type(() => Bundle)
  bundles: Bundle[];
}
export const RoomSchema = SchemaFactory.createForClass(Room);