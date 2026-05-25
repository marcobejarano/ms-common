import type { JwtConfig } from "./jwt-config.type";

export interface VerifyInternalServiceAccessTokenOptions
  extends JwtConfig {
  token: string;
}
