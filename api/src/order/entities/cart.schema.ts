import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as db from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Product } from 'src/products/entities/product.schema';
import { User } from 'src/users/users.schema';
export type CartDocument = Cart & Document;

@Schema({ timestamps: true })
export class Cart {
    @Transform(({ value }) => value.toString())
    _id: ObjectId;

    @Prop({ type: db.Schema.Types.ObjectId, ref: User.name })
    @Type(() => User)
    user: User;
    
    @Prop({ type: db.Schema.Types.ObjectId, ref: Product.name })
    @Type(() => Product)
    product: Product;

    @Prop()
    code: string;

    @Prop()
    id: string;
    
    @Prop()
    quantity: number;

    @Prop()
    type:string;

    @Prop()
    json: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);