import { OutOfRangeException } from '@app/common/filters/rpcexception/rpc-exception';
import { AuthCommonResponse, User, ValidationResponse } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { compare, hash } from 'bcryptjs';
import Redis from 'ioredis';
import { EmailService } from './email.service';

const VERIFY_TTL = 5 * 60;       // 5분 (초)
const RESET_TTL  = 60 * 60;      // 1시간 (초)

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @Inject('REDIS') private readonly redis: Redis,
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
    private readonly emailService: EmailService,
  ) {}

  async validateUser(email: string, password: string) {
    if (!email || !password)
      throw new OutOfRangeException('아이디와 비밀번호를 확인해주세요.');
    const user = await this.mysqlPrismaService.user.findUnique({
      where: { email },
    });
    if (!user) return null;

    const isMatch = await compare(password, user.password);
    if (isMatch) {
      const { password: _, ...result } = user;
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
    return user;
  }

  async oauthLogin({ providerId, provider }: { providerId: string; provider: string }) {
    const user = await this.mysqlPrismaService.user.findFirst({
      where: { email: providerId },
    });
    if (!user) {
      const hashedPassword = await hash(randomBytes(32).toString('hex'), 10);
      const newUser = await this.mysqlPrismaService.user.create({
        data: {
          email: providerId,
          provider,
          password: hashedPassword,
          nickname: null,
        },
      });
      return {
        id: newUser.id,
        email: newUser.email,
        nickname: newUser.nickname,
        image: newUser.image,
        createdAt: this.utilsService.dateToTimestamp(newUser.createdAt as Date),
        updatedAt: this.utilsService.dateToTimestamp(newUser.updatedAt as Date),
        deletedAt: newUser.deletedAt
          ? this.utilsService.dateToTimestamp(newUser.deletedAt as Date)
          : null,
        gender: newUser.gender,
      } as User;
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
    return existingUser
      ? { isAvailable: false, message: '이미 사용 중인 이메일입니다.' }
      : { isAvailable: true, message: '사용 가능한 이메일입니다.' };
  }

  async validateNickname(nickname: string): Promise<ValidationResponse> {
    const existingUser = await this.mysqlPrismaService.user.findFirst({
      where: { nickname },
    });
    return existingUser
      ? { isAvailable: false, message: '이미 사용 중인 닉네임입니다.' }
      : { isAvailable: true, message: '사용 가능한 닉네임입니다.' };
  }

  // ─── 이메일 인증 ──────────────────────────────────────────────────

  async sendVerificationCode(email: string): Promise<AuthCommonResponse> {
    const user = await this.mysqlPrismaService.user.findUnique({ where: { email } });
    if (user) {
      return { success: false, message: '이미 가입된 이메일입니다.' };
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await this.redis.set(`verify:${email}`, code, 'EX', VERIFY_TTL);

    try {
      await this.emailService.sendVerificationCode(email, code);
      return { success: true, message: '인증 코드를 발송했습니다.' };
    } catch (error) {
      this.logger.error(`Failed to send verification code to ${email}`, error);
      return { success: false, message: '이메일 발송에 실패했습니다.' };
    }
  }

  async verifyCode(email: string, code: string): Promise<ValidationResponse> {
    const stored = await this.redis.get(`verify:${email}`);
    if (!stored) {
      return { isAvailable: false, message: '인증 코드가 존재하지 않거나 만료됐습니다.' };
    }
    if (stored !== code) {
      return { isAvailable: false, message: '인증 코드가 올바르지 않습니다.' };
    }
    await this.redis.del(`verify:${email}`);
    return { isAvailable: true, message: '이메일 인증이 완료됐습니다.' };
  }

  // ─── 비밀번호 찾기 ────────────────────────────────────────────────

  async forgotPassword(email: string): Promise<AuthCommonResponse> {
    const user = await this.mysqlPrismaService.user.findUnique({ where: { email } });
    // 보안상 이메일 존재 여부와 무관하게 동일 응답
    if (!user) {
      return { success: true, message: '이메일이 발송됐습니다.' };
    }

    const token = randomBytes(32).toString('hex');
    await this.redis.set(`reset:${token}`, email, 'EX', RESET_TTL);

    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const resetUrl = `${baseUrl}/reset-password?token=${token}`;

    try {
      await this.emailService.sendPasswordResetLink(email, resetUrl);
    } catch (error) {
      this.logger.error(`Failed to send reset link to ${email}`, error);
    }

    return { success: true, message: '이메일이 발송됐습니다.' };
  }

  async resetPassword(token: string, newPassword: string): Promise<AuthCommonResponse> {
    const email = await this.redis.get(`reset:${token}`);
    if (!email) {
      return { success: false, message: '유효하지 않거나 만료된 토큰입니다.' };
    }

    const hashedPassword = await hash(newPassword, 10);
    await this.mysqlPrismaService.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    await this.redis.del(`reset:${token}`);
    this.logger.log(`Password reset for ${email}`);
    return { success: true, message: '비밀번호가 변경됐습니다.' };
  }
}
