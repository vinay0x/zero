import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'server/database/prisma.service';
import { UserWithOrganizations } from 'server/database/types/user';
import { MailService } from 'server/mail/mail.service';
import { saltFactor } from './constants';
import { CreateAccountDto } from './dto/create-account.dto';
@Injectable()
export class AccountService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  async createUserWithOrganization(createAccountDto: CreateAccountDto) {
    try {
      await this.ensureUserDoesNotExist(createAccountDto.email);
      await this.ensureOrganizationDoesNotExist(createAccountDto.organization);

      const hashedPassword = await hash(
        createAccountDto.password,
        await genSalt(saltFactor),
      );

      const user: UserWithOrganizations = await this.prisma.user.create({
        data: {
          name: createAccountDto.name,
          email: createAccountDto.email,
          password: hashedPassword,
          memberships: {
            create: [
              {
                organization: {
                  create: { name: createAccountDto.organization },
                },
                role: Role.Admin,
              },
            ],
          },
        },
        include: { memberships: { include: { organization: true } } },
      });

      await this.mailService.sendWelcomeEmail({
        name: user.name,
        email: user.email,
      });

      return {
        name: user.name,
        email: user.email,
        memberships: user.memberships,
      };
    } catch (error) {
      throw error;
    }
  }

  private async ensureUserDoesNotExist(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      throw new Error('A user with that email already exists');
    }
  }

  private async ensureOrganizationDoesNotExist(organizationName: string) {
    const organization = await this.prisma.organization.findFirst({
      where: {
        name: organizationName,
      },
    });
    if (organization) {
      throw new Error('An organization with that name already exists');
    }
  }
}
