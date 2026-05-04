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
    return this.svc?.loginUser({ email, password });
  }

  oAuthLogin({ provider, accessToken }: { provider: string; accessToken: string }) {
    return this.svc?.oauthLogin({ provider, providerId: accessToken });
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

  resetPassword({ token, newPassword }: { token: string; newPassword: string }) {
    return this.svc?.resetPassword({ token, newPassword });
  }
}
