import { AuthContextType } from './auth-context-type.enum';
import type { AuthenticatedUser } from './authenticated-user.type';
import type { BaseAuthContext } from './base-auth-context.type';

export interface UserAuthContext extends BaseAuthContext {
  type: AuthContextType.USER;
  user: AuthenticatedUser;
}
