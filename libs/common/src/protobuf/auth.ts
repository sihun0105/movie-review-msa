/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { User } from './user';

export const authProtobufPackage = 'auth';

export interface GoogleIdTokenDto { idToken: string; }
export interface SessionTokenDto { token: string; }
export interface SessionLoginResponse { user: User; token: string; }
export interface SessionValidationResponse { valid: boolean; userId?: number; provider?: string; }

export interface LoginUserDto {
  email: string;
  password: string;
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

export interface ValidateResetTokenDto {
  token: string;
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
  loginWithSession(request: LoginUserDto): Observable<SessionLoginResponse>;
  oauthWithSession(request: GoogleIdTokenDto): Observable<SessionLoginResponse>;
  validateSession(request: SessionTokenDto): Observable<SessionValidationResponse>;
  revokeSession(request: SessionTokenDto): Observable<AuthCommonResponse>;
  revokeAllSessions(request: SessionTokenDto): Observable<AuthCommonResponse>;
  validateEmail(request: ValidateEmailDto): Observable<ValidationResponse>;

  validateNickname(request: ValidateNicknameDto): Observable<ValidationResponse>;

  sendVerificationCode(request: SendVerificationCodeDto): Observable<AuthCommonResponse>;

  verifyCode(request: VerifyCodeDto): Observable<ValidationResponse>;

  forgotPassword(request: ForgotPasswordDto): Observable<AuthCommonResponse>;

  validateResetToken(request: ValidateResetTokenDto): Observable<ValidationResponse>;

  resetPassword(request: ResetPasswordDto): Observable<AuthCommonResponse>;
}

export interface AuthServiceController {
  loginWithSession(request: LoginUserDto): Promise<SessionLoginResponse> | SessionLoginResponse;
  oauthWithSession(request: GoogleIdTokenDto): Promise<SessionLoginResponse> | SessionLoginResponse;
  validateSession(request: SessionTokenDto): Promise<SessionValidationResponse> | SessionValidationResponse;
  revokeSession(request: SessionTokenDto): Promise<AuthCommonResponse> | AuthCommonResponse;
  revokeAllSessions(request: SessionTokenDto): Promise<AuthCommonResponse> | AuthCommonResponse;
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

  validateResetToken(
    request: ValidateResetTokenDto,
  ): Promise<ValidationResponse> | Observable<ValidationResponse> | ValidationResponse;

  resetPassword(
    request: ResetPasswordDto,
  ): Promise<AuthCommonResponse> | Observable<AuthCommonResponse> | AuthCommonResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'validateEmail',
      'validateNickname',
      'sendVerificationCode',
      'verifyCode',
      'forgotPassword',
      'validateResetToken',
      'resetPassword',
      'loginWithSession',
      'oauthWithSession',
      'validateSession',
      'revokeSession',
      'revokeAllSessions',
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
