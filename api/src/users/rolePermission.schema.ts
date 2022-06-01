import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Permission,PermissionSchema } from './permission.schema';
export type RolePermissionDocument = RolePermission & Document;
@Schema()
export class RolePermission {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({type:PermissionSchema})
  @Type(() => Permission)
  permission: Permission;

  @Prop()
  create: boolean;

  @Prop()
  read: boolean;

  @Prop()
  edit: boolean;

  @Prop()
  remove: boolean;
}

export const RolePermissionSchema = SchemaFactory.createForClass(RolePermission);