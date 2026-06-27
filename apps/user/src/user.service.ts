import {
  CreateUserDto,
  FindUserDto,
  UpdateUserDto,
  UpdateUserProfileImageDto,
  User,
} from '@app/common/protobuf';
import { AlreadyExistsException } from '@app/common/filters/rpcexception/rpc-exception';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { hash } from 'bcryptjs';
@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  private toUser(user: any): User {
    const deletedAt = user.deletedAt
      ? this.utilsService.dateToTimestamp(user.deletedAt as Date)
      : null;

    return {
      ...user,
      createdAt: this.utilsService.dateToTimestamp(user.createdAt as Date),
      updatedAt: this.utilsService.dateToTimestamp(user.updatedAt as Date),
      deletedAt,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, nickname, marketingAgreed, gender } =
      createUserDto;
    this.logger.log(`createUser email=${createUserDto.email}`);
    const hashedPassword = await hash(password, 10);
    const existedNickname = await this.mysqlPrismaService.user.findFirst({
      where: { nickname },
    });
    if (existedNickname) {
      throw new AlreadyExistsException('이미 존재하는 닉네임입니다.');
    }
    const existedEmail = await this.mysqlPrismaService.user.findFirst({
      where: { email },
    });
    if (existedEmail) {
      throw new AlreadyExistsException('이미 존재하는 이메일입니다.');
    }
    const user = await this.mysqlPrismaService.user.create({
      data: {
        email,
        password: hashedPassword,
        nickname,
        marketing_agreed: marketingAgreed,
        gender: gender as 'male' | 'female',
      },
    });
    return this.toUser(user);
  }

  async remove(id: number): Promise<User> {
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id },
    });
    if (!userData || userData.deletedAt) {
      throw new NotFoundException(`User not found ${id} `);
    }
    const deletedUser = await this.mysqlPrismaService.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return this.toUser(deletedUser);
  }

  async find(findUserDto: FindUserDto): Promise<User> {
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id: findUserDto.id },
    });
    if (!userData || userData.deletedAt) {
      throw new NotFoundException(`User not found ${findUserDto.id}`);
    }

    return this.toUser(userData);
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const { id, nickname } = updateUserDto;

    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id },
    });
    if (!userData) {
      throw new NotFoundException(`User not found ${id}`);
    }

    const updateData: Partial<User> = {};

    if (nickname) {
      const existedNickname = await this.mysqlPrismaService.user.findFirst({
        where: {
          nickname,
          id: { not: id },
        },
      });
      if (existedNickname) {
        throw new AlreadyExistsException('이미 존재하는 닉네임입니다.');
      }
      updateData.nickname = nickname;
    }

    const updatedUserData = await this.mysqlPrismaService.user.update({
      where: { id },
      data: {
        nickname: updateData.nickname,
      },
    });

    return this.toUser(updatedUserData);
  }

  async updateUserProfileImage(
    updateUserDto: UpdateUserProfileImageDto,
  ): Promise<User> {
    const { id, image } = updateUserDto;
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id },
    });
    if (!userData) {
      throw new NotFoundException(`User not found ${id}`);
    }
    this.logger.log(`updateUserProfileImage userId=${id}`);
    const updatedUserData = await this.mysqlPrismaService.user.update({
      where: { id },
      data: { image: image },
    });
    return this.toUser(updatedUserData);
  }
}
