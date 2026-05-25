import { BaseError } from './base.error.js';

export class MalformedAuthHeaderError extends BaseError {
  readonly statusCode = 401;

  readonly errorCode = 'MALFORMED_AUTH_HEADER';

  constructor(message = 'Malformed authorization header') {
    super(message);
  }
}
