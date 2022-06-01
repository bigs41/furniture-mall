import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserSchema } from '../../users/users.schema';
export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  @Prop()
  subdistrict: string;
  @Prop()
  road: string;
  @Prop()
  id: string;
  @Prop()
  geocode: string;
  @Prop()
  district: string;

  @Prop()
  province: string;

  @Prop()
  country: string;

  @Prop({ default: null })
  postcode: Number;

  @Prop({ default: 0 })
  lat: Number;

  @Prop({ default: 0 })
  lon: Number;

  @Prop({ default: false })
  isDefault: boolean;

  @Prop({ default: 0 })
  sort: Number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);