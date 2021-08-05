import { Body, Controller, Get, Post, Redirect, Res, UseGuards } from '@nestjs/common';
import { RequestUser } from 'server/decorators/requestUser.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BillingService } from './billing.service';
import { CheckoutDto } from './dto/checkout.dto';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/billing')
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
  ) { }

  @Post('/checkout')
  checkout(@Body() checkoutDto: CheckoutDto, @RequestUser() user) {
    return this.billingService.generateCheckoutUrl(checkoutDto, user);
  }
}
