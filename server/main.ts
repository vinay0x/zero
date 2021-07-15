import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(resolve('./server/public'));
  app.setBaseViewsDir(resolve('./server/public'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('ZeroNest')
    .setDescription('The ZeroNest API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documentation', app, document);

  const configService = app.get(ConfigService);
  const port: number = parseInt(configService.get("PORT")) || 3000;
  await app.listen(port, "0.0.0.0", () => console.log("Server started at port", port));
}
bootstrap();
