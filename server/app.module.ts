import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from 'server/account/account.module';
import { PrismaModule } from 'server/database/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AccountModule],
})
export class AppModule { }
