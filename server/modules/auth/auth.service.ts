import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { Queue } from 'bull';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectQueue('user') private userQueue: Queue,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const passwordsMatch = await compare(pass, user.password);
      if (!passwordsMatch) return null;
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      sessionToken: user.sessionToken,
    };
    await this.userQueue.add('updateLastLoggedIn', { id: user.id });
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
