import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Logger } from 'nestjs-pino';

@Injectable()
export class MailService {
  constructor(
    @InjectQueue('mail')
    private mailQueue: Queue,
    private logger: Logger,
  ) {}

  async sendWelcomeEmail(user): Promise<boolean> {
    try {
      await this.mailQueue.add('welcome', {
        user,
      });
      return true;
    } catch (error) {
      this.logger.error(`Error queueing welcome email to user ${user.email}`);
      return false;
    }
  }
}
