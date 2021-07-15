import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(resolve('./server/public'));
  app.setBaseViewsDir(resolve('./server/public'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
