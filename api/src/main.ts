import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './helper/filter/http-exception.filter';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';

const port = process.env.PORT ?? 8082;
const host = process.env.HOST || '0.0.0.0';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(multer().any());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text({ type: 'text/html' }));
  const config = new DocumentBuilder()
    .setTitle('API ALL')
    .setDescription('All Https request testing')
    .setVersion('1.0')
    .addTag('testAPI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(port,host);
}
bootstrap();
