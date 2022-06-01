import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, Res, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import { QueryDto } from 'src/helper/DTO/query.dto';
@UseInterceptors(ResponseFormat)
@Controller('bundle')
export class BundleController {
  constructor(private readonly productsService: ProductsService) {}


  @Get('/syncZortout')
  async syncZortout() {
    return await this.productsService.syncZortoutBundles();
  }

  @Get('count')
  count() {
    return this.productsService.$model('bundle').countDocuments();
  }
  @Get()
  findAll(@Query() query:QueryDto) {
    return help.queryPagination(this.productsService.$model('bundle'), {
      params: query
    })
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return _.head(await this.productsService.$model('bundle').aggregate([])
      .match({ _id: new mongoose.Types.ObjectId(id) })
      .lookup({ 
        from: 'products',
        localField: 'list.id',
        foreignField: 'id',
        as: 'products'
      }))
  }
  @Post(':id')
  async save(@Param('id') id: string, @Body() body: any) {
    if(['create','add','0'].includes(id)) {
      return this.productsService.$model('bundle').create(body);
    } else {
      return this.productsService.$model('bundle').findOneAndUpdate({_id: id}, body, {new: true});
    }
  }
}
