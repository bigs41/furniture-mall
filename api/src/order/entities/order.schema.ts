import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as db from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Product } from 'src/products/entities/product.schema';
import { User } from 'src/users/users.schema';
export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({default: '', type: String})
  name: string;

  @Prop({default: '', type: String})
  code: string;

  @Prop({default: '', type: String})
  description: string;

  @Prop({default: [], type: Array})
  order: [
    {
      _id: ObjectId, name: string, code: string, description: string, price: number, quantity: number
    }
  ];

  @Prop({ type: db.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  user: User;
  
  @Prop([{ type: db.Schema.Types.ObjectId, ref: Product.name }])
  @Type(() => Product)
  products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);