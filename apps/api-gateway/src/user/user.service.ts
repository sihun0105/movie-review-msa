import {
  CreateUserDto,
  USER_PACKAGE_NAME,
  USER_SERVICE_NAME,
  UserServiceClient,
} from '@app/common';
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

  findAll() {
    return this.userService.findAllUsers({});
  }

  findOne(id: number) {
    return this.userService.findOneUser({ id });
  }

  remove(id: number) {
    return this.userService.removeUser({ id });
  }
}
