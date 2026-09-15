import {
  AuthServiceClient,
  AUTH_SERVICE_NAME,
  AUTH_PACKAGE_NAME,
} from '@app/common/protobuf';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);
  private authService: AuthServiceClient;

  constructor(
    @Inject(AUTH_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  private get svc() {
    if (!this.authService) {
      this.logger.error('Auth service is not initialized.');
      return null;
    }
    return this.authService;
  }

  login({ email, password }: { email: string; password: string }) {
    return this.svc?.loginWithSession({ email, password });
  }

  oAuthLogin({ provider, accessToken }: { provider: string; accessToken: string }) {
    if (provider !== 'google') throw new Error('Unsupported provider');
    return this.svc?.oauthWithSession({ idToken: accessToken });
  }

  validateSession(token: string) {
    return this.svc?.validateSession({ token });
  }

  revokeSession(token: string) {
    return this.svc?.revokeSession({ token });
  }

  revokeAllSessions(token: string) {
    return this.svc?.revokeAllSessions({ token });
  }

  validateEmail({ email }: { email: string }) {
    return this.svc?.validateEmail({ email });
  }

  validateNickname({ nickname }: { nickname: string }) {
    return this.svc?.validateNickname({ nickname });
  }

  sendVerificationCode({ email }: { email: string }) {
    return this.svc?.sendVerificationCode({ email });
  }

  verifyCode({ email, code }: { email: string; code: string }) {
    return this.svc?.verifyCode({ email, code });
  }

  forgotPassword({ email }: { email: string }) {
    return this.svc?.forgotPassword({ email });
  }

  validateResetToken({ token }: { token: string }) {
    return this.svc?.validateResetToken({ token });
  }

  resetPassword({ token, newPassword }: { token: string; newPassword: string }) {
    return this.svc?.resetPassword({ token, newPassword });
  }
}
