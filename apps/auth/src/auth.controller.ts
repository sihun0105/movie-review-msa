import { OutOfRangeException } from '@app/common/filters/rpcexception/rpc-exception';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  LoginUserDto,
  OauthLoginDto,
  User,
  ValidateEmailDto,
  ValidateNicknameDto,
  ValidationResponse,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: AuthService) {}

  async loginUser(request: LoginUserDto): Promise<User> {
    const user = await this.usersService.validateUser(
      request.email,
      request.password,
    );
    if (!user) {
      throw new OutOfRangeException('Invalid credentials');
    }
    const result = await this.usersService.login(user);
    return result;
  }

  async oauthLogin(request: OauthLoginDto): Promise<User> {
    const user = await this.usersService.oauthLogin(request);
    if (!user) {
      throw new OutOfRangeException('Invalid credentials');
    }
    return user;
  }

  async validateEmail(request: ValidateEmailDto): Promise<ValidationResponse> {
    const result = await this.usersService.validateEmail(request.email);
    return result;
  }

  async validateNickname(
    request: ValidateNicknameDto,
  ): Promise<ValidationResponse> {
    const result = await this.usersService.validateNickname(request.nickname);
    return result;
  }
}
