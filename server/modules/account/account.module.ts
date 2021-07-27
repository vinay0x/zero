import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MailService } from 'server/mail/mail.service';
import { AuthModule } from '../auth/auth.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [
    AuthModule,
    BullModule.registerQueue({ name: 'mail', redis: process.env.REDIS_URL }),
  ],
  controllers: [AccountController],
  providers: [AccountService, MailService],
})
export class AccountModule {}
