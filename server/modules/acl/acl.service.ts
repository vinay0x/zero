import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Claims } from './acl.constants';

@Injectable()
export class AclService {
  constructor() {}

  async validate(claim: Claims, user: User): Promise<any> {
    return null;
  }
}
