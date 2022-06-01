import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as db from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Product } from 'src/products/entities/product.schema';
import { Project } from './project.schema';
export type ModelDocument = Model & db.Document;

@Schema()
export class Model {
  @Transform(({ value }) => value.toString())
  _id: db.ObjectId;
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  description: string;

  @Prop({ type: db.Schema.Types.ObjectId, ref: Product.name })
  @Type(() => Product)
  product: Product;

  @Prop({ type: db.Schema.Types.ObjectId, ref: Project.name })
  @Type(() => Project)
  project: Project;

}

export const ModelSchema = SchemaFactory.createForClass(Model);