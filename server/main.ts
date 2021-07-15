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
  const port: number = parseInt(configService.get("PORT")) || 3000;
  await app.listen(port, "0.0.0.0", () => console.log("Server started at port", port));
}
bootstrap();
