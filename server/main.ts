import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { resolve } from 'path';
import { AppModule } from './app.module';
import { CommonExceptionFilter } from './GlobalExceptionHandler';
import renderReactApp from './renderReactApp';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(resolve('./public'));
  app.setBaseViewsDir(resolve('./public'));
  app.setViewEngine('ejs');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CommonExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('ZeroNest')
    .setDescription('The ZeroNest API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documentation', app, document);

  // Custom middleware for rendering the React app always as Nest.js doesn't have fallback route option
  app.use(renderReactApp);

  const configService = app.get(ConfigService);
  const port: number = parseInt(configService.get("PORT")) || 3000;
  await app.listen(port, "0.0.0.0", () => console.log("Server started at port", port));
}
bootstrap();
