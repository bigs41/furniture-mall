
import { Res } from '@nestjs/common';
import { Response } from 'express';
const $utils = require('../../helper/utils');
const _ = require('lodash');
export class Query{
    private $format:string;
    private $aggregate:any;
    private $query:any;
    constructor(public $model:any){
        this.$model = $model;
    }
    aggregate(...args:any[]){
        this.$format = 'aggregate';
        this.$aggregate = args;
        this.$query = this.$model.aggregate(...args);
        return this;
    }
    async sort(...args:any){
        this.$query = this.$query.sort(...args);
        return this;
    }
    async pagination(page:number=1,limit:number=20){
        let $paging:any = {}
        var $count:any={};
        if(this.$format === 'aggregate'){
            let res = await this.$model.aggregate(this.$aggregate).count('total')
            $count= _.get(res,'0.total',0);
            $paging =  $utils.paginations($count,limit,page)
        }
        console.log(this.$query)
        this.$query = this.$query.skip(limit * page).limit(limit)
        return this.$query
        return new Promise((resolve,reject)=>{
            this.$query.skip(limit * page).limit(limit).exec((err,data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve({
                        data,
                        paging:$paging
                    });
                }
            })
        })
        
    }
}
export const Process = async function ($model:any) {
   return new Query($model);
}