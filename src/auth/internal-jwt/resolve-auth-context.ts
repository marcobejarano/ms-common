import { InvalidAccessTokenError } from "../../errors/invalid-access-token.error";
import { AuthContextType } from "../constants/auth-context-type.enum";
import type { AuthContext } from "../context/auth-context.type";
import { extractBearerToken } from "./extract-bearer-token";
import { InternalTokenType } from "./types/internal-token-type.enum";
import type { ResolveAuthContextOptions } from "./types/resolve-auth-context-options.type";
import { verifyInternalServiceAccessToken } from "./verify-internal-service-access-token";
import { verifyInternalUserAccessToken } from "./verify-internal-user-access-token";

export async function resolveAuthContext(
  options: ResolveAuthContextOptions,
): Promise<AuthContext> {
  if (!options.authorizationHeader) {
    return {
      type: AuthContextType.ANONYMOUS,
    };
  }

  const token = extractBearerToken(
    options.authorizationHeader,
  );

  // First decode WITHOUT trust
  const [, payloadBase64] = token.split('.');

  if (!payloadBase64) {
    throw new InvalidAccessTokenError();
  }

  const payloadJson = atob(payloadBase64);

  const payload = JSON.parse(payloadJson) as {
    tokenType?: string;
  };

  // USER TOKEN
  if (payload.tokenType === InternalTokenType.USER) {
    const verifiedPayload =
      await verifyInternalUserAccessToken({
        token,
        secret: options.secret,
        issuer: options.issuer,
        audience: options.audience,
      });

    return {
      type: AuthContextType.USER,
      user: {
        id: verifiedPayload.sub,
        email: verifiedPayload.email,
        role: verifiedPayload.role,
        permissions: verifiedPayload.permissions,
        companyId: verifiedPayload.companyId,
      },
    };
  }

  // SERVICE TOKEN
  if (
    payload.tokenType ===
    InternalTokenType.SERVICE
  ) {
    const verifiedPayload =
      await verifyInternalServiceAccessToken({
        token,
        secret: options.secret,
        issuer: options.issuer,
        audience: options.audience,
      });

    return {
      type: AuthContextType.INTERNAL,
      service: {
        name: verifiedPayload.service,
      },
    };
  }

  throw new InvalidAccessTokenError(
    'Unknown internal token type',
  );
}
