import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
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

export const ArticleSchema = SchemaFactory.createForClass(Article);