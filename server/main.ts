import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(resolve('./server/public'));
  app.setBaseViewsDir(resolve('./server/public'));
  app.setViewEngine('ejs');

  const configService = app.get(ConfigService);
  const port = configService.get("PORT") || 3000;
  console.log("Starting server at port", port);
  await app.listen(3000);
}
bootstrap();
