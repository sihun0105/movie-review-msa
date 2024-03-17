/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { User } from './user';

export const authProtobufPackage = 'auth';

export interface AuthorizationDto {
  accessToken: string;
  refreshToken: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export const AUTH_PACKAGE_NAME = 'auth';

export interface AuthServiceClient {
  loginUser(request: LoginUserDto): Observable<User>;

  refreshToken(request: RefreshTokenDto): Observable<AuthorizationDto>;
}

export interface AuthServiceController {
  loginUser(request: LoginUserDto): Promise<User> | Observable<User> | User;

  refreshToken(
    request: RefreshTokenDto,
  ):
    | Promise<AuthorizationDto>
    | Observable<AuthorizationDto>
    | AuthorizationDto;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['loginUser', 'refreshToken'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AuthService', method)(
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
      GrpcStreamMethod('AuthService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const AUTH_SERVICE_NAME = 'AuthService';
