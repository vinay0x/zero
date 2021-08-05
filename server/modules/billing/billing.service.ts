import Stripe from 'stripe';
const stripeClient = new Stripe('sk_test_DH5KvSEOi1cRgeMqtdWjtEFX00clyRwE9v', {
  apiVersion: '2020-08-27'
});
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'server/database/prisma.service';
import { CheckoutDto } from './dto/checkout.dto';

@Injectable()
export class BillingService {
  constructor(
    private prisma: PrismaService
  ) { }

  async generateCheckoutUrl(checkoutDto: CheckoutDto, user) {
    try {
      const session = await stripeClient.checkout.sessions.create({
        payment_method_types: [
          'card',
        ],
        customer_email: user.email,
        line_items: [
          {
            price: checkoutDto.stripePriceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: "http://localhost:3000/settings/billing",
        cancel_url: "http://localhost:3000/settings/billing",
      })
      return session.url;
    } catch (err) {
      console.error(err)
    }
  }
}
