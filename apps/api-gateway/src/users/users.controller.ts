import { CreateUserDto } from '@app/common';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { convertToUserEntity } from './users.entity';
import { UsersService } from './users.service';
import { RpcException } from '@nestjs/microservices';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('join')
  create(@Body() createUserDto: CreateUserDto) {
    const data = this.usersService.create(createUserDto).pipe(
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
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      const data = await firstValueFrom(
        this.usersService.login(loginDto.email, loginDto.password).pipe(
          catchError(() => {
            throw new Error('Login failed');
          }),
        ),
      );
      const user = convertToUserEntity(data);
      return user;
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
