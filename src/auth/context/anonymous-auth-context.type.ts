import { AuthContextType } from '../constants/auth-context-type.enum';
import type { BaseAuthContext } from './base-auth-context.type';

export interface AnonymousAuthContext extends BaseAuthContext {
  type: AuthContextType.ANONYMOUS;
}
