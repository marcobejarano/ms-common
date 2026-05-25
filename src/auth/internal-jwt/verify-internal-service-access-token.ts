import { jwtVerify } from "jose";
import type { InternalServiceAccessTokenPayload } from "./payloads/internal-service-access-token-payload.type";
import type { VerifyInternalServiceAccessTokenOptions } from "./types/verify-internal-service-access-token-options.type";

export async function verifyInternalServiceAccessToken(
  options: VerifyInternalServiceAccessTokenOptions,
): Promise<InternalServiceAccessTokenPayload> {
  const secret = new TextEncoder().encode(options.secret);

  const { payload } = await jwtVerify(
    options.token,
    secret,
    {
      issuer: options.issuer,
      audience: options.audience,
    },
  );

  return payload as InternalServiceAccessTokenPayload;
}
