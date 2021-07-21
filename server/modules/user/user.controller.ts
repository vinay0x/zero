import { Controller, Get, UseGuards } from '@nestjs/common';
import { RequestUser } from 'server/decorators/requestUser.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  login(@RequestUser() user) {
    return this.userService.findByEmail(user.email);
  }

  @Get('/user/organizations')
  getOrganizations(@RequestUser() user) {
    return this.userService.findOrganizations(user.email);
  }
}
