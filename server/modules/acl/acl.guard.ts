import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClaimMetadataKey } from 'server/decorators/authorizeFor.decorator';

@Injectable()
export class AclGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const claim = this.reflector.getAllAndOverride<Role[]>(ClaimMetadataKey, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!claim) {
      return true;
    } else {
      const { user } = context.switchToHttp().getRequest();
      return true;
    }
  }
}
