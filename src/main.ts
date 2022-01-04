import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function setupApp(app: INestApplication) {
  app.setGlobalPrefix('api/v1');
}

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);

  setupApp(app);

  await app.listen(PORT);
}

bootstrap();
