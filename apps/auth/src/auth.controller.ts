import {
  AuthServiceController,
  AuthServiceControllerMethods,
  AuthorizationDto,
  LoginUserDto,
  RefreshTokenDto,
  User,
} from '@app/common';
import { OutOfRangeException } from '@app/common/grpcException/grpc-exception';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: AuthService) {}

  async loginUser(request: LoginUserDto): Promise<User> {
    console.log(request);
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

  refreshToken(
    request: RefreshTokenDto,
  ):
    | AuthorizationDto
    | Promise<AuthorizationDto>
    | Observable<AuthorizationDto> {
    return this.usersService.refreshToken(request);
  }
}
