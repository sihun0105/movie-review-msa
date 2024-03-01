import {
  CreateUserDto,
  USER_SERVICE_NAME,
  UserServiceClient,
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AUTH_SERVICE } from './constansts';

@Injectable()
export class UsersService implements OnModuleInit {
  private userService: UserServiceClient;
  constructor(
    @Inject(AUTH_SERVICE)
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

  findOne(id: string) {
    return this.userService.findOneUser({ id });
  }

  remove(id: string) {
    return this.userService.removeUser({ id });
  }
}
