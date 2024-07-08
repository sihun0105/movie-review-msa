import {
  AuthServiceClient,
  AUTH_SERVICE_NAME,
  AUTH_PACKAGE_NAME,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService implements OnModuleInit {
  private authService: AuthServiceClient;
  constructor(
    @Inject(AUTH_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.authService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  login({ email, password }: { email: string; password: string }) {
    if (!this.authService) {
      console.log('Auth service is not initialized.');
      return;
    }
    return this.authService.loginUser({ email, password });
  }
  oAuthLogin({
    provider,
    accessToken,
  }: {
    provider: string;
    accessToken: string;
  }) {
    if (!this.authService) {
      console.log('Auth service is not initialized.');
      return;
    }
    return this.authService.oauthLogin({
      provider: provider,
      providerId: accessToken,
    });
  }
}
