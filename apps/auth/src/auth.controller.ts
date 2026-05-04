import { OutOfRangeException } from '@app/common/filters/rpcexception/rpc-exception';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  AuthCommonResponse as CommonResponse,
  ForgotPasswordDto,
  LoginUserDto,
  OauthLoginDto,
  ResetPasswordDto,
  SendVerificationCodeDto,
  User,
  ValidateEmailDto,
  ValidateNicknameDto,
  ValidationResponse,
  VerifyCodeDto,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: AuthService) {}

  async loginUser(request: LoginUserDto): Promise<User> {
    const user = await this.usersService.validateUser(request.email, request.password);
    if (!user) throw new OutOfRangeException('Invalid credentials');
    return this.usersService.login(user);
  }

  async oauthLogin(request: OauthLoginDto): Promise<User> {
    const user = await this.usersService.oauthLogin(request);
    if (!user) throw new OutOfRangeException('Invalid credentials');
    return user;
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

  async resetPassword(request: ResetPasswordDto): Promise<CommonResponse> {
    return this.usersService.resetPassword(request.token, request.newPassword);
  }
}
