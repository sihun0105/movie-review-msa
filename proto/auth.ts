/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { User } from "./user";

export const protobufPackage = "auth";

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface OauthLoginDto {
  provider: string;
  providerId: string;
}

export interface ValidateEmailDto {
  email: string;
}

export interface ValidateNicknameDto {
  nickname: string;
}

export interface ValidationResponse {
  isAvailable: boolean;
  message: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  loginUser(request: LoginUserDto): Observable<User>;

  oauthLogin(request: OauthLoginDto): Observable<User>;

  validateEmail(request: ValidateEmailDto): Observable<ValidationResponse>;

  validateNickname(request: ValidateNicknameDto): Observable<ValidationResponse>;
}

export interface AuthServiceController {
  loginUser(request: LoginUserDto): Promise<User> | Observable<User> | User;

  oauthLogin(request: OauthLoginDto): Promise<User> | Observable<User> | User;

  validateEmail(
    request: ValidateEmailDto,
  ): Promise<ValidationResponse> | Observable<ValidationResponse> | ValidationResponse;

  validateNickname(
    request: ValidateNicknameDto,
  ): Promise<ValidationResponse> | Observable<ValidationResponse> | ValidationResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["loginUser", "oauthLogin", "validateEmail", "validateNickname"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
