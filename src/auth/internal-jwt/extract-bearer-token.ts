import { MalformedAuthHeaderError } from '../../errors/malformed-auth-header.error.js';

export function extractBearerToken(
  authorizationHeader?: string,
): string {
  if (!authorizationHeader) {
    throw new MalformedAuthHeaderError();
  }

  const [type, token] =
    authorizationHeader.split(' ');

  if (type !== 'Bearer' || !token) {
    throw new MalformedAuthHeaderError();
  }

  return token;
}
