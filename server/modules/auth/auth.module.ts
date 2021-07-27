import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { UserQueue } from '../user/user.queue';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'user', redis: process.env.REDIS_URL }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '365d' },
    }),
    PassportModule,
    UserModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
