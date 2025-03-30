import {
  CreateUserDto,
  RemoveUserDto,
  UpdateUserDto,
  UpdateUserProfileImageDto,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

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
  updateUserProfileImage(
    request: UpdateUserProfileImageDto,
  ): Promise<User> | Observable<User> | User {
    return this.userService.updateUserProfileImage(request);
  }
}
