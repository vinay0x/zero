import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from 'server/database/prisma.module';
import { AccountModule } from 'server/modules/account/account.module';
import configuration from './config/configuration';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import PinoPretty from 'pino-pretty';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    BullModule.forRootAsync({
      useFactory: () => {
        console.log('Here the env value is', process.env.REDIS_URL);
        return {
          redis: process.env.REDIS_URL,
        };
      },
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        prettyPrint: {
          colorize: true,
        },
      },
    }),
    MailModule,
    PrismaModule,
    AccountModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
