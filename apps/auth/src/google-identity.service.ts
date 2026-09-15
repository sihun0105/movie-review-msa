import { Injectable, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

const DEFAULT_GOOGLE_CLIENT_ID =
  '737850083538-vvhpddci1a1u2fv9ak3lpe2b546rbhdm.apps.googleusercontent.com';

@Injectable()
export class GoogleIdentityService {
  constructor(private readonly client: OAuth2Client) {}

  async getEmail(idToken: string) {
    if (!idToken || idToken.split('.').length !== 3) {
      throw new UnauthorizedException('Invalid Google ID token');
    }
    const ticket = await this.client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID || DEFAULT_GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload?.email || !payload.email_verified || !payload.sub) {
      throw new UnauthorizedException('Google account is not verified');
    }
    return payload.email;
  }
}
