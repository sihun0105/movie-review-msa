import { CreateUserDto } from '@app/common';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { catchError, throwError } from 'rxjs';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    const data = this.userService.create(createUserDto).pipe(
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
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
