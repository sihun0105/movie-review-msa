import { OutOfRangeException } from '@app/common/filters/rpcexception/rpc-exception';
import { User, ValidationResponse } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
    private jwtService: JwtService,
  ) {}
  private readonly users: User[] = [];

  async validateUser(email: string, password: string) {
    if (!email || !password)
      throw new OutOfRangeException('아이디와 비밀번호를 확인해주세요.');
    const user = await this.mysqlPrismaService.user.findUnique({
      where: { email },
    });
    if (!user) {
      return null;
    }

    const isMatch = await compare(password, user.password);
    if (isMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return {
        ...result,
        createdAt: result.createdAt.toISOString(),
        updatedAt: result.updatedAt.toISOString(),
        deletedAt: result.deletedAt ? result.deletedAt.toISOString() : null,
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

  async oauthLogin({
    providerId,
    provider,
  }: {
    providerId: string;
    provider: string;
  }) {
    const user = await this.mysqlPrismaService.user.findFirst({
      where: { email: providerId },
    });
    if (!user) {
      const hashedPassword = await hash('moview' + providerId, 10);
      const newUser = await this.mysqlPrismaService.user.create({
        data: {
          email: providerId,
          provider: provider,
          password: hashedPassword,
          nickname: Math.random().toString(36).substring(7),
        },
      });
      const createdAt = this.utilsService.dateToTimestamp(
        newUser.createdAt as Date,
      );
      const updatedAt = this.utilsService.dateToTimestamp(
        newUser.updatedAt as Date,
      );
      const deletedAt = newUser.deletedAt
        ? this.utilsService.dateToTimestamp(newUser.deletedAt as Date)
        : null;

      const userObject: User = {
        id: newUser.id,
        email: newUser.email,
        nickname: newUser.nickname,
        image: newUser.image,
        createdAt,
        updatedAt,
        deletedAt,
        gender: newUser.gender,
      };
      return userObject;
    }
    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      deletedAt: user.deletedAt ? user.deletedAt.toISOString() : null,
      gender: user.gender,
    };
  }

  async validateEmail(email: string): Promise<ValidationResponse> {
    const existingUser = await this.mysqlPrismaService.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        isAvailable: false,
        message: '이미 사용 중인 이메일입니다.',
      };
    }

    return {
      isAvailable: true,
      message: '사용 가능한 이메일입니다.',
    };
  }

  async validateNickname(nickname: string): Promise<ValidationResponse> {
    const existingUser = await this.mysqlPrismaService.user.findFirst({
      where: { nickname },
    });

    if (existingUser) {
      return {
        isAvailable: false,
        message: '이미 사용 중인 닉네임입니다.',
      };
    }

    return {
      isAvailable: true,
      message: '사용 가능한 닉네임입니다.',
    };
  }
}
