import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from 'server/modules/account/account.module';
import { PrismaModule } from 'server/database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AccountModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
