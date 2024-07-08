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
      const userDataObservable = this.authService.login({ ...loginDto });
      const data = await firstValueFrom(userDataObservable);
      const user = convertToUserEntity(data);
      return user;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @LoginSpecDecorator('Oauth2.0 API', 'Oauth2.0 API')
  @Post('oauth')
  async oauth(@Body() loginDto: { provider: string; accessToken: string }) {
    try {
      const userDataObservable = this.authService.oAuthLogin({ ...loginDto });
      const data = await firstValueFrom(userDataObservable);
      const user = convertToUserEntity(data);
      return user;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }
}
