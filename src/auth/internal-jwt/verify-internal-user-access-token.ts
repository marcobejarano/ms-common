import { jwtVerify } from 'jose';
import type { VerifyInternalUserAccessTokenOptions } from './types/verify-internal-user-access-token-options.type';
import type { InternalUserAccessTokenPayload } from './payloads/internal-user-access-token-payload.type';

export async function verifyInternalUserAccessToken(
  options: VerifyInternalUserAccessTokenOptions,
): Promise<InternalUserAccessTokenPayload> {
  const secret = new TextEncoder().encode(options.secret);

  const { payload } = await jwtVerify(
    options.token,
    secret,
    {
      issuer: options.issuer,
      audience: options.audience,
    },
  );

  return payload as InternalUserAccessTokenPayload;
}
