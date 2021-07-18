import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AclService } from './acl.service';

@Module({
  imports: [UserModule],
  providers: [AclService],
  exports: [AclService],
})
export class AclModule {}
