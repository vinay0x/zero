import { BullModule } from '@nestjs/bull';
import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'server/database/prisma.module';
import { AccountModule } from 'server/modules/account/account.module';
import configuration from './config/configuration';
import { MailModule } from './mail/mail.module';
import { requestLogger } from './middlewares/logger';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BillingModule } from './modules/billing/billing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    BullModule.forRootAsync({
      useFactory: () => {
        const url = new URL(process.env.REDIS_URL || 'redis://127.0.0.1:6379');
        return {
          redis: {
            host: url.hostname,
            port: Number(url.port),
            password: url.password,
          },
        };
      },
    }),
    MailModule,
    PrismaModule,
    AccountModule,
    AuthModule,
    UserModule,
    BillingModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(requestLogger).forRoutes('*');
  }
}
