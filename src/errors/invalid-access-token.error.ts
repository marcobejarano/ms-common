import { BaseError } from './base.error';

export class InvalidAccessTokenError extends BaseError {
  readonly statusCode = 401;
  readonly errorCode = 'INVALID_ACCESS_TOKEN';

  constructor(message = 'Invalid access token') {
    super(message);
  }
}
