import {
  AccessToken,
  CreateUserDto,
  FindOneUserDto,
  LoginUserDto,
  RefreshTokenDto,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common';
import { Controller, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneUserDto.id);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }

  async loginUser(request: LoginUserDto): Promise<User> {
    const user = await this.usersService.validateUser(
      request.email,
      request.password,
    );
    if (!user) {
      throw new HttpException('아이디와 비밀번호를 확인해주세요.', 500);
    }
    const result = await this.usersService.login(user);
    return result;
  }

  refreshToken(
    request: RefreshTokenDto,
  ): AccessToken | Promise<AccessToken> | Observable<AccessToken> {
    return this.usersService.refreshToken(request);
  }
}
