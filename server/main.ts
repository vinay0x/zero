import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Queue } from 'bull';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import expressBasicAuth from 'express-basic-auth';
import { resolve } from 'path';
import { AppModule } from './app.module';
import { CommonExceptionFilter } from './GlobalExceptionHandler';
import renderReactApp from './renderReactApp';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

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

  // For bull-board integration
  const queueNames = ['user', 'mail'];
  const { router: bullRouter } = createBullBoard(
    queueNames.map(
      (name) => new BullAdapter(app.get<Queue>(`BullQueue_${name}`)),
    ),
  );

  app.use(
    '/bull-board',
    expressBasicAuth({
      users: {
        admin: process.env.BULL_BOARD_PASSWORD,
      },
      challenge: true,
    }),
    bullRouter,
  );

  // Custom middleware for rendering the React app always as Nest.js doesn't have fallback route option
  app.use(renderReactApp);

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0', () => {
    console.log('Server started at port', port);
  });
}
bootstrap();
