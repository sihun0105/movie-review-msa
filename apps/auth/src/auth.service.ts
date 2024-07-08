import { AuthorizationDto, User } from '@app/common/protobuf';
import { OutOfRangeException } from '@app/common/filters/rpcexception/rpc-exception';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { UtilsService } from '@app/utils';
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly utilsService: UtilsService,
    private jwtService: JwtService,
  ) {}
  private readonly users: User[] = [];

  async validateUser(email: string, password: string) {
    if (!email || !password)
      throw new OutOfRangeException('아이디와 비밀번호를 확인해주세요.');
    const user = await this.prismaService.user.findUnique({ where: { email } });
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

  refreshToken({ refreshToken }: { refreshToken: string }): AuthorizationDto {
    if (refreshToken)
      return {
        accessToken: randomUUID(),
        refreshToken: randomUUID(),
      };
  }

  async oauthLogin({
    providerId,
    provider,
  }: {
    providerId: string;
    provider: string;
  }) {
    const user = await this.prismaService.user.findUnique({
      where: { email: providerId },
    });
    if (!user) {
      const newUser = await this.prismaService.user.create({
        data: { email: providerId, provider: provider },
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
        createdAt,
        updatedAt,
        deletedAt,
      };
      return userObject;
    }
    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      deletedAt: user.deletedAt ? user.deletedAt.toISOString() : null,
    };
  }
}
