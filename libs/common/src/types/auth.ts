/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'auth';

export interface Empty {}

export interface User {
  id: number;
  email: string;
  nickname: string;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
  deletedAt: Timestamp | undefined;
}

export interface AccessToken {
  accessToken: string;
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

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export const AUTH_PACKAGE_NAME = 'auth';

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;

  findOneUser(request: FindOneUserDto): Observable<User>;

  removeUser(request: RemoveUserDto): Observable<Empty>;

  loginUser(request: LoginUserDto): Observable<User>;

  refreshToken(request: RefreshTokenDto): Observable<AccessToken>;
}

export interface UserServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  removeUser(
    request: RemoveUserDto,
  ): Promise<Empty> | Observable<Empty> | Empty;

  loginUser(request: LoginUserDto): Promise<User> | Observable<User> | User;

  refreshToken(
    request: RefreshTokenDto,
  ): Promise<AccessToken> | Observable<AccessToken> | AccessToken;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createUser',
      'findAllUsers',
      'findOneUser',
      'removeUser',
      'loginUser',
      'refreshToken',
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
