import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';

export type PermissionDocument = Permission & Document;
@Schema()
export class Permission {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop()
  link: string;

  @Prop()
  code: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);