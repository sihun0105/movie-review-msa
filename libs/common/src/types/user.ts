/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'user';

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

export interface UpdateUserDto {
  id: number;
  email: string;
  nickname: string;
}

export interface RemoveUserDto {
  id: number;
}

export const USER_PACKAGE_NAME = 'user';

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  removeUser(request: RemoveUserDto): Observable<User>;

  updateUser(request: UpdateUserDto): Observable<User>;
}

export interface UserServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  removeUser(request: RemoveUserDto): Promise<User> | Observable<User> | User;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createUser', 'removeUser', 'updateUser'];
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
