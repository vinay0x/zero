import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
