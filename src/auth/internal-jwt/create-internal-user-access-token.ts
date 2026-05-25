import { SignJWT } from 'jose';
import type { CreateInternalUserAccessTokenOptions } from './types/create-internal-user-access-token-options.type';

export async function createInternalUserAccessToken(
  options: CreateInternalUserAccessTokenOptions,
): Promise<string> {
  const secret = new TextEncoder().encode(options.secret);

  return await new SignJWT(options.payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(options.issuer)
    .setAudience(options.audience)
    .setIssuedAt()
    .setExpirationTime(options.expiresIn ?? '15m')
    .sign(secret);
}
