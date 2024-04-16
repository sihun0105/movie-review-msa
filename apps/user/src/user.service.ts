import { CreateUserDto, UpdateUserDto, User } from '@app/common/protobuf';
import { AlreadyExistsException } from '@app/common/filters/rpcexception/rpc-exception';
import { PrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable, NotFoundException } from '@nestjs/common';
import { hash } from 'bcryptjs';
@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, nickname } = createUserDto;
    const hashedPassword = await hash(password, 10);
    const existedNickname = await this.prismaService.user.findFirst({
      where: { nickname },
    });
    const existedEmail = await this.prismaService.user.findFirst({
      where: { email },
    });
    if (existedEmail) {
      throw new AlreadyExistsException('이미 존재하는 이메일입니다.');
    }
    if (existedNickname) {
      throw new AlreadyExistsException('이미 존재하는 닉네임입니다.');
    }
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
        nickname,
      },
    });
    const createdAt = this.utilsService.dateToTimestamp(user.createdAt as Date);
    const updatedAt = this.utilsService.dateToTimestamp(user.updatedAt as Date);
    const deletedAt = user.deletedAt
      ? this.utilsService.dateToTimestamp(user.deletedAt as Date)
      : null;

    const userObject: User = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      createdAt,
      updatedAt,
      deletedAt,
    };
    return userObject;
  }

  async remove(id: number): Promise<User> {
    const userData = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!userData) {
      throw new NotFoundException(`User not found ${id} `);
    }
    const deletedUser = await this.prismaService.user.delete({
      where: { id },
    });
    const createdAt = this.utilsService.dateToTimestamp(
      deletedUser.createdAt as Date,
    );
    const updatedAt = this.utilsService.dateToTimestamp(
      deletedUser.updatedAt as Date,
    );
    const deletedAt = deletedUser.deletedAt
      ? this.utilsService.dateToTimestamp(deletedUser.deletedAt as Date)
      : null;

    const userObject: User = {
      id: deletedUser.id,
      email: deletedUser.email,
      nickname: deletedUser.nickname,
      createdAt,
      updatedAt,
      deletedAt,
    };
    return userObject;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const { id, email, nickname } = updateUserDto;
    const userData = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!userData) {
      throw new NotFoundException(`User not found ${id}`);
    }
    const updatedUserData = await this.prismaService.user.update({
      where: { id },
      data: {
        email,
        nickname,
      },
    });
    const createdAt = this.utilsService.dateToTimestamp(
      updatedUserData.createdAt as Date,
    );
    const updatedAt = this.utilsService.dateToTimestamp(
      updatedUserData.updatedAt as Date,
    );
    const deletedAt = updatedUserData.deletedAt
      ? this.utilsService.dateToTimestamp(updatedUserData.deletedAt as Date)
      : null;
    return {
      ...updatedUserData,
      createdAt,
      updatedAt,
      deletedAt,
    };
  }
}
