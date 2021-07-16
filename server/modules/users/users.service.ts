import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'server/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(readonly prisma: PrismaService) { }

  async findByUsername(name: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { name } });
  }
}