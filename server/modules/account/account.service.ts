import { Injectable } from '@nestjs/common';
import { hash, genSalt } from 'bcrypt';
import { User, Organization } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'server/database/prisma.service';
import { UserWithOrganizations } from 'server/types/user';
import { CreateAccountDto } from './dto/create-account.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { saltFactor } from './constants';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

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
      return user;
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
