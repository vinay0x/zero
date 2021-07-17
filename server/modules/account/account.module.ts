import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
