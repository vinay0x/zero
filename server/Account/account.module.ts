import { Module } from '@nestjs/common';
import { AccountService } from './services/account.service';
import { AccountController } from './controllers/account.controller';

@Module({
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule { }
