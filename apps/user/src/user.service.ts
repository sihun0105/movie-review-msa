import { CreateUserDto, UpdateUserDto, User, Users } from '@app/common';
import { AlreadyExistsException } from '@app/common/grpcException/grpc-exception';
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
  private readonly users: User[] = [];

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
      : undefined;

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

  async findAll(): Promise<Users> {
    return { users: this.users };
  }

  findOne(id: number): User {
    return this.users.find((users) => users.id === id);
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((users) => users.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex)[0];
    }
    throw new NotFoundException(`User not found ${id} `);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const { id, email, nickname } = updateUserDto;
    const user = this.users.find((users) => users.id === id);
    if (!user) {
      throw new NotFoundException(`User not found ${id} `);
    }
    if (email) {
      user.email = email;
    }
    if (nickname) {
      user.nickname = nickname;
    }
    return user;
  }
}
