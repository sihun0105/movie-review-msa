import {
  CreateUserDto,
  USER_PACKAGE_NAME,
  USER_SERVICE_NAME,
  UpdateUserDto,
  UserServiceClient,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceClient;
  constructor(
    @Inject(USER_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }
  create(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  remove(deleteUserDto: { id: number }) {
    return this.userService.removeUser({ ...deleteUserDto });
  }

  update(updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({ ...updateUserDto });
  }
}
