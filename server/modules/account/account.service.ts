import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'server/database/prisma.service';
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

      const user = await this.prisma.user.create({
        select: { name: true, email: true },
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
              },
            ],
          },
        },
      });

      await this.mailService.sendWelcomeEmail({
        name: user.name,
        email: user.email,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  async getOrganization(organizationName: string) {
    try {
      const organization = await this.prisma.organization.findFirst({
        where: { name: organizationName },
      });
      return organization;
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
