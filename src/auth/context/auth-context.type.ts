import type { AnonymousAuthContext } from "./anonymous-auth-context.type";
import type { InternalAuthContext } from "./internal-auth-context.type";
import type { UserAuthContext } from "./user-auth-context.type";

export type AuthContext =
  | UserAuthContext
  | InternalAuthContext
  | AnonymousAuthContext;
