/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { User } from './user';

export const authProtobufPackage = 'auth';

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

export interface SendVerificationCodeDto {
  email: string;
}

export interface VerifyCodeDto {
  email: string;
  code: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  newPassword: string;
}

export interface AuthCommonResponse {
  success: boolean;
  message: string;
}

export const AUTH_PACKAGE_NAME = 'auth';

export interface AuthServiceClient {
  loginUser(request: LoginUserDto): Observable<User>;

  oauthLogin(request: OauthLoginDto): Observable<User>;

  validateEmail(request: ValidateEmailDto): Observable<ValidationResponse>;

  validateNickname(request: ValidateNicknameDto): Observable<ValidationResponse>;

  sendVerificationCode(request: SendVerificationCodeDto): Observable<AuthCommonResponse>;

  verifyCode(request: VerifyCodeDto): Observable<ValidationResponse>;

  forgotPassword(request: ForgotPasswordDto): Observable<AuthCommonResponse>;

  resetPassword(request: ResetPasswordDto): Observable<AuthCommonResponse>;
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

  sendVerificationCode(
    request: SendVerificationCodeDto,
  ): Promise<AuthCommonResponse> | Observable<AuthCommonResponse> | AuthCommonResponse;

  verifyCode(
    request: VerifyCodeDto,
  ): Promise<ValidationResponse> | Observable<ValidationResponse> | ValidationResponse;

  forgotPassword(
    request: ForgotPasswordDto,
  ): Promise<AuthCommonResponse> | Observable<AuthCommonResponse> | AuthCommonResponse;

  resetPassword(
    request: ResetPasswordDto,
  ): Promise<AuthCommonResponse> | Observable<AuthCommonResponse> | AuthCommonResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'loginUser',
      'oauthLogin',
      'validateEmail',
      'validateNickname',
      'sendVerificationCode',
      'verifyCode',
      'forgotPassword',
      'resetPassword',
    ];
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
