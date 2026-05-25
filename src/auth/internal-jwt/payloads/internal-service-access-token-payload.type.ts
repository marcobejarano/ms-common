import type { JWTPayload } from "jose";
import type { InternalTokenType } from "../types/internal-token-type.enum";

/**
 * This represents:
 * authenticated internal service identity
 * Used for:
 * - queues
 * - cron jobs
 * - orchestration
 * - internal service communication
 */
export interface InternalServiceAccessTokenPayload
  extends JWTPayload {
  tokenType: InternalTokenType.SERVICE;
  service: string;
}

