import {
  CreateUserDto,
  RemoveUserDto,
  UpdateUserDto,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  removeUser(findOneUserDto: RemoveUserDto): Promise<User> {
    return this.userService.remove(findOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.updateUser(updateUserDto);
  }
}
