import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import  * as help from '../helper/utils'
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: UpdateNewsDto) {
    return this.newsService.$model('news').create(createNewsDto);
  }
  @Get('count')
  countAll(@Query() query:any) {
    return this.newsService.$model('news').countDocuments()
  }
  @Get()
  findAll(@Query() query:QueryDto) {
    return help.queryPagination(this.newsService.$model('news'), {
      params: query
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.$model('news').findOne({ _id: id });
  }
  @Post(':id')
  async save(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    if (!['create','add','0'].includes(id)) {
      return this.newsService.$model('news').updateOne({ _id: id }, updateNewsDto);
    } else {
      updateNewsDto.sort = await this.newsService.$model('news').countDocuments()+1;
      console.log(updateNewsDto);
      return this.newsService.$model('news').create(updateNewsDto);
    }
  }
  @Patch(':id/:sort')
  async updateSort(@Param('id') id: string,@Param('sort') sort: number, @Body() body: any) {
    const current = await this.newsService.$model('news').findOne({ _id: id });
    if (help.getNumber(sort) > help.getNumber(current.sort)) {
      await this.newsService.$model('news').updateMany({ sort: { $gte: help.getNumber(current.sort), $lte: help.getNumber(sort) } }, { $inc: { sort: -1 } });
    } else {
      await this.newsService.$model('news').updateMany({ sort: { $gte: help.getNumber(sort), $lte: help.getNumber(current.sort) } }, { $inc: { sort: 1 } });
    }
    return await this.newsService.$model('news').updateOne({ _id: id }, { sort: sort });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const current = await this.newsService.$model('news').findOne({ _id: id });
    await this.newsService.$model('news').updateMany({ sort: { $gte: help.getNumber(current.sort) } }, { $inc: { sort: -1 } });
    return await this.newsService.$model('news').deleteOne({ _id: id });
  }
}
