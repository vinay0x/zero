import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Job } from 'bull';
import { Logger } from 'nestjs-pino';
import { PrismaService } from 'server/database/prisma.service';

@Injectable()
@Processor('mail')
export class MailQueue {
  constructor(
    private prisma: PrismaService,
    private logger: Logger,
    private mailerService: MailerService,
  ) {}

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.debug(
      `Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(
        result,
      )}`,
    );
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(
      `Failed job ${job.id} of type ${job.name}: ${error.message}`,
      error.stack,
    );
  }

  @Process('welcome')
  async sendWelcomeMail(job: Job<{ user: User }>): Promise<any> {
    try {
      await this.mailerService.sendMail({
        template: './welcome',
        context: job.data.user,
        subject: `Welcome to ZeroNest!`,
        to: job.data.user.email,
      });
      this.logger.log('Sending welcome email.');
    } catch (error) {
      this.logger.error(error);
    }
  }
}
