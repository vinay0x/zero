import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountController } from 'server/account/account.controller';
import { AccountModule } from 'server/account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
