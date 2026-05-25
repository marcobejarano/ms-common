import type { JwtConfig } from "./jwt-config.type";

export interface ResolveAuthContextOptions
  extends JwtConfig {
  authorizationHeader?: string;
}
