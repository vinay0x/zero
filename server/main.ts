import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { resolve } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(resolve('./public'));
  app.setBaseViewsDir(resolve('./public'));
  app.setViewEngine('ejs');

  const configService = app.get(ConfigService);
  const port: number = parseInt(configService.get("PORT")) || 3000;
  await app.listen(port, "0.0.0.0", () => console.log("Server started at port", port));
}
bootstrap();
