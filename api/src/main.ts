import { join } from 'path';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/assets', express.static(join(__dirname, 'assets')));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
  
  console.log(`App is running on: ${process.env.PORT} port`);
}

bootstrap();
