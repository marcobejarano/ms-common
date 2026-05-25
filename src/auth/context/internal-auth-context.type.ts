import { AuthContextType } from './auth-context-type.enum';
import type { BaseAuthContext } from './base-auth-context.type';
import type { InternalService } from './internal-service.type';

export interface InternalAuthContext extends BaseAuthContext {
  type: AuthContextType.INTERNAL;
  service: InternalService;
}
