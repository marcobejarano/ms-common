import type { AuthContextType } from "../constants/auth-context-type.enum";

export interface BaseAuthContext {
  type: AuthContextType;
}
