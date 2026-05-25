import type { InternalServiceAccessTokenPayload } from "../payloads/internal-service-access-token-payload.type";
import type { JwtConfig } from "./jwt-config.type";

export interface CreateInternalServiceAccessTokenOptions
  extends JwtConfig {
  payload: InternalServiceAccessTokenPayload;

  expiresIn?: string;
}
