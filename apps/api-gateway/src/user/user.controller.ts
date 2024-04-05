import { CreateUserDto, UpdateUserDto } from '@app/common';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { RateLimitGuard } from '@app/common/guards/rateLimit/rate-limit.guard';
import {
  Body,
  Controller,
  Delete,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
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

  @Patch('/')
  @UseGuards(JwtAuthGuard)
  @UseGuards(RateLimitGuard)
  update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    const userNumber = req.user.id;
    return this.userService.update({ ...updateUserDto, id: userNumber });
  }
  @Delete('/')
  @UseGuards(JwtAuthGuard)
  @UseGuards(RateLimitGuard)
  remove(@Req() req) {
    const userNumber = req.user.id;
    return this.userService.remove({ id: userNumber });
  }
}
