import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('/api/v1/')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post("/signup")
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.createUserWithOrganization(createAccountDto);
  }
}
