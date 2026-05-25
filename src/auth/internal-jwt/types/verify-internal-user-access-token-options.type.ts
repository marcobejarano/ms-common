import type { JwtConfig } from "./jwt-config.type";

export interface VerifyInternalUserAccessTokenOptions
  extends JwtConfig {
  token: string;
}
