import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserWithOrganizations } from 'server/types/user';

export const RequestUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserWithOrganizations => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
