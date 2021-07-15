import { Injectable } from '@nestjs/common';
import { User, Organization } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'server/database/prisma.service';
import { UserWithOrganizations } from 'server/types/user';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  async createUserWithOrganization(createAccountDto: CreateAccountDto) {
    try {
      await this.ensureUserDoesNotExist(createAccountDto.email);
      await this.ensureOrganizationDoesNotExist(createAccountDto.organization);
      const account = await this.prisma.user.create({
        data: {
          name: createAccountDto.name,
          email: createAccountDto.email,
          password: createAccountDto.password,
          memberships: {
            create: [{ organization: { create: { name: createAccountDto.organization } } }],
          },
        },
      })
      return account;
    } catch (error) {
      throw error
    }
  }

  private async ensureUserDoesNotExist(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      throw new Error('A user with that email already exists')
    }
  }

  private async ensureOrganizationDoesNotExist(organizationName: string) {
    const organization = await this.prisma.organization.findFirst({
      where: {
        name: organizationName
      },
    });
    if (organization) {
      throw new Error('An organization with that name already exists')
    }
  }

}
