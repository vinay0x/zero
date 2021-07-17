import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'server/database/prisma.service';

@Injectable()
export class UserService {
  constructor(readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { email } });
  }
}
