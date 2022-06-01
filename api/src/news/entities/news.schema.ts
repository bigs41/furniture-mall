import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop({type:Object})
  name: {
      th: string,
      en:string
  };

  @Prop()
  sort: number;

  @Prop({type:Object})
  description: {
      th: string,
      en:string
  };
}

export const NewsSchema = SchemaFactory.createForClass(News);