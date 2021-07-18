import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserController } from './user.controller';
import { UserQueue } from './user.queue';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserQueue],
  exports: [UserService, UserQueue],
})
export class UserModule {}
