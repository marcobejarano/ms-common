import type { InternalUserAccessTokenPayload } from "../payloads/internal-user-access-token-payload.type";
import type { JwtConfig } from "./jwt-config.type";

export interface CreateInternalUserAccessTokenOptions
  extends JwtConfig {
  payload: InternalUserAccessTokenPayload;

  expiresIn?: string;
}
