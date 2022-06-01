import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import  * as help from '../helper/utils'
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.$model('article').create(createArticleDto);
  }

  @Get()
  findAll(@Query() query: QueryDto) {
    return help.queryPagination(this.articleService.$model('article'), {
      params: query
    })
  }

  @Get('count')
  countAll(@Query() query:any) {
    return this.articleService.$model('article').countDocuments()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.$model('article').findOne({ _id: id });
  }
  @Post(':id')
  async save(@Param('id') id: string, @Body() input: any) {
    if (!['create','add','0'].includes(id)) {
      return this.articleService.$model('article').updateOne({ _id: id }, input);
    } else {
      input.sort = await this.articleService.$model('article').countDocuments()+1;
      return this.articleService.$model('article').create(input);
    }
  }

  @Patch(':id/:sort')
  async updateSort(@Param('id') id: string,@Param('sort') sort: number, @Body() body: any) {
    const current = await this.articleService.$model('article').findOne({ _id: id });
    if (help.getNumber(sort) > help.getNumber(current.sort)) {
      await this.articleService.$model('article').updateMany({ sort: { $gte: help.getNumber(current.sort), $lte: help.getNumber(sort) } }, { $inc: { sort: -1 } });
    } else {
      await this.articleService.$model('article').updateMany({ sort: { $gte: help.getNumber(sort), $lte: help.getNumber(current.sort) } }, { $inc: { sort: 1 } });
    }
    return await this.articleService.$model('article').updateOne({ _id: id }, { sort: sort });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const current = await this.articleService.$model('article').findOne({ _id: id });
    await this.articleService.$model('article').updateMany({ sort: { $gte: help.getNumber(current.sort) } }, { $inc: { sort: -1 } });
    return await this.articleService.$model('article').deleteOne({ _id: id });
  }
}
