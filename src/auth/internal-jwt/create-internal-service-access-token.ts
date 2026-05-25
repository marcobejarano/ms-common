import { SignJWT } from "jose";
import type { CreateInternalServiceAccessTokenOptions } from "./types/create-internal-service-access-token-options.type";

export async function createInternalServiceAccessToken(
  options: CreateInternalServiceAccessTokenOptions,
): Promise<string> {
  const secret = new TextEncoder().encode(options.secret);

  return await new SignJWT(options.payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(options.issuer)
    .setAudience(options.audience)
    .setIssuedAt()
    .setExpirationTime(options.expiresIn ?? '5m')
    .sign(secret);
}
