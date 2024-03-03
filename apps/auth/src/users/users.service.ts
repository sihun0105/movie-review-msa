import {
  AccessToken,
  CreateUserDto,
  LoginUserDto,
  User,
  Users,
} from '@app/common';
import { PrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { createHash, randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly utilsService: UtilsService,
  ) {}
  private readonly users: User[] = [];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, nickname } = createUserDto;
    const hashedPassword = createHash('sha256').update(password).digest('hex');

    const existedNickname = await this.prismaService.user.findFirst({
      where: { nickname },
    });
    if (existedNickname) {
      throw new BadRequestException('이미 존재하는 닉네임입니다.');
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

    // 사용자 객체 생성
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

  login(data: LoginUserDto): User {
    const user = this.users.find((users) => users.email === data.email);
    if (user) {
      return user;
    }
    throw new NotFoundException('User not found');
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((users) => users.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex)[0];
    }
    throw new NotFoundException(`User not found ${id} `);
  }

  refreshToken({ refreshToken }: { refreshToken: string }): AccessToken {
    if (refreshToken) return { accessToken: randomUUID() };
  }
}
