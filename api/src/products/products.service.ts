import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument,ProductSchema } from "./entities/product.schema";
import { Category, CategoryDocument,CategorySchema } from "./entities/category.schema";
import { Bundle, BundleDocument,BundleSchema } from "./entities/bundle.schema";
import * as _ from 'lodash';
import * as help from 'src/helper/utils';

import * as mongoosePaginate from 'mongoose-paginate-v2';
require('dotenv').config();
ProductSchema.plugin(mongoosePaginate)
CategorySchema.plugin(mongoosePaginate)
BundleSchema.plugin(mongoosePaginate)
const axios = require('axios');
const collect = require('collect.js');
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly $ProductModel: Model<ProductDocument>,
    @InjectModel(Category.name) private readonly $CategoryModel: Model<CategoryDocument>,
    @InjectModel(Bundle.name) private readonly $BundleModel: Model<BundleDocument>,
  ) { }
  $model(model:any) {
    const modelName = `$${_.upperFirst(model)}Model`
    return this[modelName]
  }
  async syncZortoutBundles() { 
    try {
      let $lists = [];
      let $round = 1;
      let $limit = 100;
      let $isLoad = true;
      while ($lists.length != $limit) {
        if ($lists.length == $limit) {
          break;
        }
        const r = await axios.get(`https://api.zortout.com/api.aspx?method=GETBUNDLES&version=3&format=json&page=${$round}&limit=100`,{
          headers: {
            'storename': process.env.ZORT_STORENAME,
            'apikey': process.env.ZORT_APIKEY,
            'apisecret': process.env.ZORT_APISECRET,
          }
        });
        const $list = _.get(r.data, 'list', []);
        $limit = _.get(r.data, 'count', 100);
        
        if (!help.empty($list)) {
          $round++
          $lists = _.concat($lists, $list);
        } else if ($round>=100) {
          break;
        } else {
          break;
        }
      }
      if(!$lists.length){
        return 'no category';
      }
      let $listDetail = []
      for (let $li of $lists) {
        $li = _.get(await axios.get(`https://api.zortout.com/api.aspx?method=GETBUNDLEDETAIL&version=3&format=json&id=${$li.id}`,{
          headers: {
            'storename': process.env.ZORT_STORENAME,
            'apikey': process.env.ZORT_APIKEY,
            'apisecret': process.env.ZORT_APISECRET,
          }
        }), 'data', {})

        $listDetail.push($li)
      }
      let $a = await this.$model('Bundle').find({id:{'$in':$listDetail.map(x=>x.id)}})
      $a = JSON.parse(JSON.stringify($a)) // convert class function to json
      if(!$a.length){
        await this.$model('Bundle').insertMany(
          (JSON.parse(JSON.stringify($listDetail))).map(x => { 
            x.purchaseprice = x.sellprice
            return x
          })
        )
      }else{
        let diff = collect($listDetail).map(x=>`${x.id}`).diff($a.map(x=>`${x.id}`)).all()
        if(diff.length){
          await this.$model('Bundle').insertMany(collect($listDetail).filter(x => diff.includes(x.id)).map(x => {
            x.purchaseprice = x.sellprice
            return x
          }).all())
        }
        for (const iterator of $a) {
          await this.$model('Bundle').updateOne(
            {id:`${iterator.id}`},
            {$set:collect($listDetail).filter(x=>`${x.id}`==`${iterator.id}`).first()}
          )
        }
      }
      return 'sync Bundle done'+new Date();
    } catch (error) {
      console.log(error);
    }
  }
  async syncZortoutCategory() {
    try {
      let $lists = [];
      let $round = 1;
      let $limit = 100;
      let $isLoad = true;
      while ($lists.length != $limit) {
        if ($lists.length == $limit) {
          break;
        }
        const r = await axios.get(`https://api.zortout.com/api.aspx?method=GETCATEGORYS&version=3&format=json&page=${$round}&limit=100`,{
          headers: {
            'storename': process.env.ZORT_STORENAME,
            'apikey': process.env.ZORT_APIKEY,
            'apisecret': process.env.ZORT_APISECRET,
          }
        });
        const $list = _.get(r.data, 'list', []);
        $limit = _.get(r.data, 'count', 100);
        
        if (!help.empty($list)) {
          $round++
          $lists = _.concat($lists, $list);
        } else if ($round>=100) {
          break;
        } else {
          break;
        }
      }
      if(!$lists.length){
        return 'no category';
      }
      let $a = await this.$model('category').find({id:{'$in':$lists.map(x=>x.id)}})
      $a = JSON.parse(JSON.stringify($a)) // convert class function to json
      if(!$a.length){
        await this.$model('category').insertMany($lists)
      }else{
        let diff = collect($lists).map(x=>`${x.id}`).diff($a.map(x=>`${x.id}`)).all()
        if(diff.length){
          await this.$model('category').insertMany(collect($lists).filter(x=>diff.includes(x.id)).all())
        }
        for (const iterator of $a) {
          await this.$model('category').updateOne(
            {id:`${iterator.id}`},
            {$set:collect($lists).filter(x=>`${x.id}`==`${iterator.id}`).first()}
          )
        }
      }
      return 'sync category done'+new Date();
    } catch (error) {
      console.log(error);
      
    }
  }
  async syncZortout() {
    const r = await axios.get('https://api.zortout.com/api.aspx?method=GETPRODUCTS&version=3&format=json',{
            headers: {
              'storename': process.env.ZORT_STORENAME,
              'apikey': process.env.ZORT_APIKEY,
              'apisecret': process.env.ZORT_APISECRET,
            }
        })
        let $a = await this.$model('product').find({sku:{'$in':r.data.list.map(x=>x.sku)}})
        $a = JSON.parse(JSON.stringify($a)) // convert class function to json
        if(!$a.length){
           await this.$model('product').insertMany(r.data.list)
        }else{
            let diff = collect(r.data.list).map(x=>x.sku).diff($a.map(x=>x.sku)).all()
            if(diff.length){
                await this.$model('product').insertMany(collect(r.data.list).filter(x=>diff.includes(x.sku)).all())
            }
            for (const iterator of $a) {
                await this.$model('product').updateOne(
                    {sku:iterator.sku},
                    {$set:collect(r.data.list).filter(x=>x.sku==iterator.sku).first()}
                )
            }
        }
    return 'sync product done'+new Date();
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
