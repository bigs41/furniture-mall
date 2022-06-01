"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./helper/filter/http-exception.filter");
const bodyParser = require("body-parser");
const multer = require("multer");
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8082;
const host = process.env.HOST || '0.0.0.0';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(multer().any());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text({ type: 'text/html' }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API ALL')
        .setDescription('All Https request testing')
        .setVersion('1.0')
        .addTag('testAPI')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/swagger', app, document);
    await app.listen(port, host);
}
bootstrap();
//# sourceMappingURL=main.js.map