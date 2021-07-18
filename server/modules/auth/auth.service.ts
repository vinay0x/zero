import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Queue } from 'bull';
import { UserWithOrganizations } from 'server/types/user';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectQueue('user') private userQueue: Queue,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: UserWithOrganizations =
      await this.userService.findWithOrganizations(email);
    if (user) {
      const passwordsMatch = await compare(pass, user.password);
      if (!passwordsMatch) return null;
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserWithOrganizations) {
    const payload = {
      email: user.email,
      id: user.id,
      sessionToken: user.sessionToken,
    };
    await this.userQueue.add('updateLastLoggedIn', { id: user.id });
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
