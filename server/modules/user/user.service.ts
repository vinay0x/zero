import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'server/database/prisma.service';
import { UserWithOrganizations } from 'server/types/user';

@Injectable()
export class UserService {
  constructor(readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  async findWithOrganizations(
    email: string,
  ): Promise<UserWithOrganizations | undefined> {
    return this.prisma.user.findFirst({
      where: { email },
      include: { memberships: { include: { organization: true } } },
    });
  }

  async findOrganizations(email: string): Promise<any> {
    const userWithOrganizations: UserWithOrganizations =
      await this.prisma.user.findFirst({
        where: { email },
        include: { memberships: { include: { organization: true } } },
      });
    return userWithOrganizations.memberships.map(
      (membership) => membership.organization,
    );
  }
}
