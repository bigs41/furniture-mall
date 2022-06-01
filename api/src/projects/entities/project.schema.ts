import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as db from 'mongoose';
import { Model,ModelSchema } from './model.schema';
import { Transform, Type } from 'class-transformer';
import { Product } from 'src/products/entities/product.schema';
import { Bundle } from 'src/products/entities/bundle.schema';
import { Room } from 'src/projects/entities/room.schema';
import { House } from 'src/projects/entities/house.schema';
import { Style } from 'src/projects/entities/style.schema';

export type ProjectDocument = Project & db.Document;

@Schema({ timestamps: true})
export class Project {
  @Transform(({ value }) => value.toString())
  _id: db.ObjectId;

  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  uri: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  @Prop({ default: 0 })
  area: number;

  @Prop({ type: db.Schema.Types.ObjectId, ref: Style.name })
  @Type(() => Style)
  style: Style;

  @Prop()
  image: string;

  @Prop({default:0})
  status: boolean;

  @Prop()
  sellpricetotal: string
  
  @Prop()
  sellprice: string
  
  @Prop()
  stock: string;

  @Prop()
  availablestock: string;

  @Prop([{ type: db.Schema.Types.ObjectId, ref: Product.name }])
  @Type(() => Product)
  products: Product[];

  @Prop([{ type: db.Schema.Types.ObjectId, ref: Bundle.name }])
  @Type(() => Bundle)
  bundles: Bundle[];

  @Prop([{ type: db.Schema.Types.ObjectId, ref: Room.name }])
  @Type(() => Room)
  rooms: Room[];

  @Prop([{ type: db.Schema.Types.ObjectId, ref: House.name }])
  @Type(() => House)
  houses: House[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);