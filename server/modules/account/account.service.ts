import { Injectable } from '@nestjs/common';
import { User, Organization } from '@prisma/client';
import { PrismaService } from 'server/database/prisma.service';
import { UserWithOrganizations } from 'server/types/user';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  async findAll() {
    const user: UserWithOrganizations = await this.prisma.user.findFirst({
      include: {
        memberships: { include: { organization: true } },
      }
    });

    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
