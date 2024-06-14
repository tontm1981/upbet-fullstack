import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use((request: Request, response: Response, next: NextFunction) => {
    response.setHeader('Access-Control-Allor-Origin', 'http://localhost:8080');
    next();
  });

  await app.listen(3000);
}
bootstrap();
