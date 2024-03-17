/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const userProtobufPackage = 'user';

export interface Empty {}

export interface User {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface Users {
  users: User[];
}

export interface CreateUserDto {
  email: string;
  password: string;
  nickname: string;
}

export interface RemoveUserDto {
  id: number;
}

export interface FindOneUserDto {
  id: number;
}

export interface UpdateUserDto {
  id: number;
  email: string;
  nickname: string;
}

export const USER_PACKAGE_NAME = 'user';

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;

  findOneUser(request: FindOneUserDto): Observable<User>;

  removeUser(request: RemoveUserDto): Observable<Empty>;

  updateUser(request: UpdateUserDto): Observable<User>;
}

export interface UserServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  removeUser(
    request: RemoveUserDto,
  ): Promise<Empty> | Observable<Empty> | Empty;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createUser',
      'findAllUsers',
      'findOneUser',
      'removeUser',
      'updateUser',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const USER_SERVICE_NAME = 'UserService';
