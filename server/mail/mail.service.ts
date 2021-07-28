import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MailService {
  constructor(
    @InjectQueue('mail')
    private mailQueue: Queue,
  ) {}

  private readonly logger = new Logger(MailService.name);

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
