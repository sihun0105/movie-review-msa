import { AccessToken, CreateUserDto, User, Users } from '@app/common';
import { PrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly utilsService: UtilsService,
    private jwtService: JwtService,
  ) {}
  private readonly users: User[] = [];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, nickname } = createUserDto;
    const hashedPassword = await hash(password, 10);

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
  async validateUser(email: string, password: string) {
    if (!email || !password)
      throw new BadRequestException('email , password에 문제가 있습니다.');
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) {
      return null;
    }

    const isMatch = await compare(password, user.password);
    if (isMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      const createdAt = this.utilsService.dateToTimestamp(
        user.createdAt as Date,
      );
      const updatedAt = this.utilsService.dateToTimestamp(
        user.updatedAt as Date,
      );
      const deletedAt = user.deletedAt
        ? this.utilsService.dateToTimestamp(user.deletedAt as Date)
        : undefined;
      return {
        ...result,
        createdAt,
        updatedAt,
        deletedAt,
      };
    }
    return null;
  }
  async login(user: Omit<User, 'password'>) {
    const payload = { username: user.email, userid: user.id };
    const acc = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
    });
    const refreshPayload = { payload, acc };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ref = this.jwtService.sign(refreshPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME,
    });
    return user;
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
