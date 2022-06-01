import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MatchModule } from './match/match.module';
import { TodoModule } from './todo/todo.module';
import { AddressModule } from './address/address.module';
import { MinioClientModule } from './helper/minio-client/minio-client.module';
import * as mongoose_delete from 'mongoose-delete'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProjectsModule } from './projects/projects.module';
import { NewsModule } from './news/news.module';
import { ArticleModule } from './article/article.module';
import { AppGateway } from './plugin/app.gateway';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './plugin/tasks/tasks.module';
import { ProductsModule } from './products/products.module';

import { PDFModule, PDFModuleOptions, } from 'nestjs-pdf';
import { OrderModule } from './order/order.module';
import { MediaModule } from './media/media.module';
require('dotenv').config();
const MONGO_URI = `${process.env.MONGO_URL||"root:123456@localhost:27017"}/vdecor_dev?authSource=admin`

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist'),
    }),
    PDFModule.registerAsync({
        useFactory: (): PDFModuleOptions => ({
            view: {
                root: '/template',
                engine: 'pug',
            },
        })
    }),
    MongooseModule.forRoot(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000,
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-unique-validator'));
        connection.plugin(mongoose_delete, { deletedAt: true, overrideMethods: true });
        return connection;
      }
    }),
    AuthModule,
    UsersModule,
    MatchModule,
    TodoModule,
    AddressModule,
    MinioClientModule,
    ProjectsModule,
    NewsModule,
    ArticleModule,
    TasksModule,
    ProductsModule,
    OrderModule,
    MediaModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule { }
