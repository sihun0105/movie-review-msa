import { Body, Controller, Post } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '@app/api-gateway/src/auth/auth.service';
import { convertToUserEntity } from '@app/common/entity';
import { LoginSpecDecorator } from '@app/api-gateway/src/auth/decorator/login-spec-decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @LoginSpecDecorator('로그인 API', '로그인API')
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      const data = await firstValueFrom(this.authService.login(loginDto));
      return convertToUserEntity(data);
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  @LoginSpecDecorator('Oauth2.0 API', 'Oauth2.0 API')
  @Post('oauth')
  async oauth(@Body() loginDto: { provider: string; accessToken: string }) {
    try {
      const data = await firstValueFrom(this.authService.oAuthLogin(loginDto));
      return convertToUserEntity(data);
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  @Post('validate/email')
  async validateEmail(@Body() validateDto: { email: string }) {
    try {
      return await firstValueFrom(this.authService.validateEmail(validateDto));
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  @Post('validate/nickname')
  async validateNickname(@Body() validateDto: { nickname: string }) {
    try {
      return await firstValueFrom(this.authService.validateNickname(validateDto));
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  // ─── 이메일 인증 ────────────────────────────────────────────────

  @Post('send-verification')
  async sendVerification(@Body() dto: { email: string }) {
    try {
      return await firstValueFrom(this.authService.sendVerificationCode(dto));
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  @Post('verify-code')
  async verifyCode(@Body() dto: { email: string; code: string }) {
    try {
      return await firstValueFrom(this.authService.verifyCode(dto));
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  // ─── 비밀번호 찾기 ──────────────────────────────────────────────

  @Post('forgot-password')
  async forgotPassword(@Body() dto: { email: string }) {
    try {
      return await firstValueFrom(this.authService.forgotPassword(dto));
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: { token: string; newPassword: string }) {
    try {
      return await firstValueFrom(this.authService.resetPassword(dto));
    } catch (error) {
      throw new RpcException({ code: error.code, message: error.details });
    }
  }
}
