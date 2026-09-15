import { OutOfRangeException } from '@app/common/filters/rpcexception/rpc-exception';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  AuthCommonResponse as CommonResponse,
  ForgotPasswordDto,
  LoginUserDto,
  ResetPasswordDto,
  SendVerificationCodeDto,
  User,
  ValidateEmailDto,
  ValidateNicknameDto,
  ValidateResetTokenDto,
  ValidationResponse,
  VerifyCodeDto,
  GoogleIdTokenDto,
  SessionTokenDto,
  SessionLoginResponse,
  SessionValidationResponse,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSessionService } from './auth-session.service';
import { GoogleIdentityService } from './google-identity.service';
import { UnauthenticatedException } from '@app/common/filters/rpcexception/rpc-exception';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(
    private readonly usersService: AuthService,
    private readonly sessions: AuthSessionService,
    private readonly google: GoogleIdentityService,
  ) {}

  async loginWithSession(request: LoginUserDto): Promise<SessionLoginResponse> {
    const user = await this.usersService.validateUser(request.email, request.password);
    if (!user) throw new OutOfRangeException('Invalid credentials');
    return { user, token: await this.sessions.issue(user, 'credentials') };
  }

  async oauthWithSession(request: GoogleIdTokenDto): Promise<SessionLoginResponse> {
    let email: string;
    try {
      email = await this.google.getEmail(request.idToken);
    } catch {
      throw new UnauthenticatedException('Invalid Google ID token');
    }
    const user = await this.usersService.oauthLogin({ providerId: email, provider: 'google' });
    return { user, token: await this.sessions.issue(user, 'google') };
  }

  async validateSession(request: SessionTokenDto): Promise<SessionValidationResponse> {
    return this.sessions.validate(request.token);
  }

  async revokeSession(request: SessionTokenDto): Promise<CommonResponse> {
    await this.sessions.revoke(request.token);
    return { success: true, message: 'Logged out' };
  }

  async revokeAllSessions(request: SessionTokenDto): Promise<CommonResponse> {
    const session = await this.sessions.validate(request.token);
    if (!session.valid || !session.userId) throw new UnauthenticatedException('Invalid session');
    await this.sessions.revokeAll(session.userId);
    return { success: true, message: 'All sessions revoked' };
  }

  async validateEmail(request: ValidateEmailDto): Promise<ValidationResponse> {
    return this.usersService.validateEmail(request.email);
  }

  async validateNickname(request: ValidateNicknameDto): Promise<ValidationResponse> {
    return this.usersService.validateNickname(request.nickname);
  }

  async sendVerificationCode(request: SendVerificationCodeDto): Promise<CommonResponse> {
    return this.usersService.sendVerificationCode(request.email);
  }

  async verifyCode(request: VerifyCodeDto): Promise<ValidationResponse> {
    return this.usersService.verifyCode(request.email, request.code);
  }

  async forgotPassword(request: ForgotPasswordDto): Promise<CommonResponse> {
    return this.usersService.forgotPassword(request.email);
  }

  async validateResetToken(request: ValidateResetTokenDto): Promise<ValidationResponse> {
    return this.usersService.validateResetToken(request.token);
  }

  async resetPassword(request: ResetPasswordDto): Promise<CommonResponse> {
    return this.usersService.resetPassword(request.token, request.newPassword);
  }
}
