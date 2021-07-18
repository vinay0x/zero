import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { Logger } from 'nestjs-pino';
import { PrismaService } from 'server/database/prisma.service';

@Injectable()
@Processor('user')
export class UserQueue {
  constructor(private prisma: PrismaService, private logger: Logger) {}

  @Process('updateLastLoggedIn')
  async updateLastLoggedIn(job: Job) {
    try {
      this.logger.log('Updating last logged-in time.');
      const { id } = job.data;
      await this.prisma.user.update({
        where: { id },
        data: { lastLoggedIn: new Date() },
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
