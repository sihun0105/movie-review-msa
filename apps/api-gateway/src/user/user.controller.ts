import { CreateUserDto, UpdateUserDto } from '@app/common/protobuf';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { RateLimitGuard } from '@app/common/guards/rateLimit/rate-limit.guard';
import {
  Body,
  Controller,
  Delete,
  Patch,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { CreateUserSpecDecorator } from './decorator/create-user-spec-decorator';
import { UpdateUserSpecDecorator } from './decorator/patch-user-spec-decorator';
import { DeleteUserSpecDecorator } from './decorator/delete-user-spec-decorator';
import { multerOptions } from 'libs/multer/options';
import { FilesInterceptor } from '@nestjs/platform-express';
import { convertToUserEntity } from '@app/common/entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @CreateUserSpecDecorator('회원가입 API', '회원가입')
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
  @Patch('/nickname')
  @UpdateUserSpecDecorator('회원정보 수정 API', '회원정보 수정')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
  async update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto.nickname);
    const userNumber = req.user.userId;
    const result = await firstValueFrom(
      this.userService.update({
        ...updateUserDto,
        id: userNumber,
      }),
    );
    const user = convertToUserEntity(result);
    console.log(user);
    return user;
  }
  @Patch('/image')
  @UpdateUserSpecDecorator(
    '회원정보 프로필 이미지 업데이트 API',
    '회원정보 프로필 이미지 업데이트',
  )
  @UseInterceptors(FilesInterceptor('file', 1, multerOptions))
  @UseGuards(JwtAuthGuard, RateLimitGuard)
  async updateImage(
    @Req() req,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFiles() file: Express.Multer.File,
  ) {
    const userNumber = req.user.userId;
    const filePath = file ? file[0].path : null;
    if (filePath) {
      updateUserDto.image = filePath;
    } else {
      updateUserDto.image = '';
    }
    const result = await firstValueFrom(
      this.userService.updateProfileImage({
        ...updateUserDto,
        id: userNumber,
      }),
    );
    const user = convertToUserEntity(result);
    console.log(user);
    return user;
    //
    return this.userService.updateProfileImage({
      ...updateUserDto,
      id: userNumber,
    });
  }

  @DeleteUserSpecDecorator('회원탈퇴 API', '회원탈퇴')
  @Delete('/')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
  remove(@Req() req) {
    const userNumber = req.user.id;
    return this.userService.remove({ id: userNumber });
  }
}
