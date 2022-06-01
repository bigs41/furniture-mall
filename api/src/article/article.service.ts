import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument,ArticleSchema } from "./entities/article.schema";
import * as _ from 'lodash';


import * as mongoosePaginate from 'mongoose-paginate-v2';

ArticleSchema.plugin(mongoosePaginate)
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private readonly $ArticleModel: Model<ArticleDocument>,
  ) {}
  $model(model:any) {
    const modelName = `$${_.upperFirst(model)}Model`
    return this[modelName]
  }
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
