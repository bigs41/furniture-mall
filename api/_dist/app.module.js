"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const match_module_1 = require("./match/match.module");
const todo_module_1 = require("./todo/todo.module");
const address_module_1 = require("./address/address.module");
const minio_client_module_1 = require("./helper/minio-client/minio-client.module");
const mongoose_delete = require("mongoose-delete");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const projects_module_1 = require("./projects/projects.module");
const news_module_1 = require("./news/news.module");
const article_module_1 = require("./article/article.module");
const app_gateway_1 = require("./plugin/app.gateway");
const schedule_1 = require("@nestjs/schedule");
const tasks_module_1 = require("./plugin/tasks/tasks.module");
const products_module_1 = require("./products/products.module");
const nestjs_pdf_1 = require("nestjs-pdf");
const order_module_1 = require("./order/order.module");
const media_module_1 = require("./media/media.module");
require('dotenv').config();
const MONGO_URI = `${process.env.MONGO_URL || "root:123456@localhost:27017"}/vdecor_dev?authSource=admin`;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'dist'),
            }),
            nestjs_pdf_1.PDFModule.registerAsync({
                useFactory: () => ({
                    view: {
                        root: '/template',
                        engine: 'pug',
                    },
                })
            }),
            mongoose_1.MongooseModule.forRoot(MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 50000,
                connectionFactory: (connection) => {
                    connection.plugin(require('mongoose-unique-validator'));
                    connection.plugin(mongoose_delete, { deletedAt: true, overrideMethods: true });
                    return connection;
                }
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            match_module_1.MatchModule,
            todo_module_1.TodoModule,
            address_module_1.AddressModule,
            minio_client_module_1.MinioClientModule,
            projects_module_1.ProjectsModule,
            news_module_1.NewsModule,
            article_module_1.ArticleModule,
            tasks_module_1.TasksModule,
            products_module_1.ProductsModule,
            order_module_1.OrderModule,
            media_module_1.MediaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_gateway_1.AppGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map