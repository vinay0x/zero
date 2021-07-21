import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RequestUser } from 'server/decorators/requestUser.decorator';
import { UserWithOrganizations } from 'server/types/user';
import { AuthService } from '../auth/auth.service';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('/api/v1/')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.createUserWithOrganization(createAccountDto);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@RequestUser() user: UserWithOrganizations) {
    return this.authService.login(user);
  }

  @Get('/:organization')
  getOrganization(@Param() organizationName: string) {
    return this.accountService.getOrganization(organizationName);
  }
}
