import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { RolePermission } from './rolePermission.schema';
export type RolesDocument = Roles & Document;
@Schema()
export class Roles {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop()
  code: string;


  @Prop([{type:mongoose.Schema.Types.ObjectId,ref:RolePermission.name,default:null}])
  @Type(() => RolePermission)
  rolePermission: RolePermission;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);