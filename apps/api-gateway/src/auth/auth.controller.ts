import { Body, Controller, Post } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { convertToUserEntity } from './users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    console.log(loginDto);
    try {
      const data = this.authService.login({ ...loginDto }).pipe(
        catchError((error) =>
          throwError(
            () =>
              new RpcException({
                code: error.code,
                message: error.details,
              }),
          ),
        ),
      );

      return data;
      const user = convertToUserEntity(data);
      return user;
    } catch (error) {
      throw new Error('Login failed');
    }
  }
}
