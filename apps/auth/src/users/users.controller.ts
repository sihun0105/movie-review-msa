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
import { Controller } from '@nestjs/common';
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

  loginUser(request: LoginUserDto): User | Promise<User> | Observable<User> {
    return this.usersService.login(request);
  }

  refreshToken(
    request: RefreshTokenDto,
  ): AccessToken | Promise<AccessToken> | Observable<AccessToken> {
    return this.usersService.refreshToken(request);
  }
}
