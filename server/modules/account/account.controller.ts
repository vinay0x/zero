import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

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
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
