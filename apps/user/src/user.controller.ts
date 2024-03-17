import {
  CreateUserDto,
  FindOneUserDto,
  UpdateUserDto,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  findAllUsers() {
    return this.userService.findAll();
  }

  findOneUser(findOneUserDto: FindOneUserDto) {
    return this.userService.findOne(findOneUserDto.id);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.userService.remove(findOneUserDto.id);
  }

  updateUser(
    updateUserDto: UpdateUserDto,
  ): User | Promise<User> | Observable<User> {
    return this.userService.updateUser(updateUserDto);
  }
}
