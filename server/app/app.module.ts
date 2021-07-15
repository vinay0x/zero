import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountController } from 'server/account/account.controller';
import { AccountModule } from 'server/account/account.module';
import { PrismaModule } from 'server/database/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
