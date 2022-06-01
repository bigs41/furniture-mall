import { Injectable,Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { ProductsService } from 'src/products/products.service';

const axios = require('axios');
const collect = require('collect.js');
@Injectable()
export class TasksService {
    constructor(
        private productsService: ProductsService
    ) { }
    // @Cron('45 * * * * *')
    // handleCron() {
    //   this.logger.debug('Called when the second is 45');
    // }
  
    // @Interval(10000)
    // handleInterval() {
    //   this.logger.debug('Called every 10 seconds');
    // }
  
    // @Timeout(5000)
    // async handleTimeout() {

    // }

    @Cron('0 0 6 * * *')
    async syncZortout() {
        await this.productsService.syncZortout();
        await this.productsService.syncZortoutCategory();
        await this.productsService.syncZortoutBundles();
        console.log('sync done'+new Date());
    }
}
