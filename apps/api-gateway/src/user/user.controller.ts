import { CreateUserDto, UpdateUserDto } from '@app/common';
import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { RateLimitGuard } from '@app/common/guards/rateLimit/rate-limit.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const createUserObservable = this.userService.create(createUserDto);
      const data = await firstValueFrom(createUserObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @Patch(':id')
  @UseGuards(RateLimitGuard)
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  @Delete(':id')
  @UseGuards(RateLimitGuard)
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
