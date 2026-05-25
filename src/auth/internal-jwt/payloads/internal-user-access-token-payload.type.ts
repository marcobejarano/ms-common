import type { JWTPayload } from "jose";
import type { InternalTokenType } from "../types/internal-token-type.enum";

/**
 * This is:
 * Powip internal platform user identity
 * NOT:
 * Supabase payload
 */
export interface InternalUserAccessTokenPayload
  extends JWTPayload {
  tokenType: InternalTokenType.USER;
  sub: string;
  email: string;
  role: string;
  permissions: string[];
  companyId?: string;
}
