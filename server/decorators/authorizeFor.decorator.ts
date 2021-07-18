import { Claims } from '@modules/acl/acl.constants';
import { SetMetadata } from '@nestjs/common';

export const ClaimMetadataKey = 'AUTHORIZE_FOR_CLAIM';
export const AuthorizeFor = (claim: Claims) =>
  SetMetadata(ClaimMetadataKey, claim);
