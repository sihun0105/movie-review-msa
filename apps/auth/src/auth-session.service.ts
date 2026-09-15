import { MySQLPrismaService } from '@app/prisma';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import Redis from 'ioredis';

const TTL_SECONDS = 60 * 60 * 24 * 30;
const jwtOptions = () => ({
  secret: process.env.JWT_ACCESS_SECRET,
  issuer: 'bollae-auth',
  audience: 'bollae-api',
});

type Claims = { userId: number; sessionId: string; provider: string };

@Injectable()
export class AuthSessionService {
  constructor(
    @Inject('REDIS') private readonly redis: Redis,
    private readonly jwt: JwtService,
    private readonly prisma: MySQLPrismaService,
  ) {}

  async issue(
    user: { id: number; email?: string; nickname?: string; image?: string },
    provider: string,
  ) {
    if (!process.env.JWT_ACCESS_SECRET)
      throw new Error('JWT_ACCESS_SECRET is required');
    const sessionId = randomUUID();
    const token = await this.jwt.signAsync(
      {
        userId: user.id,
        sessionId,
        provider,
        email: user.email,
        nickname: user.nickname,
        image: user.image,
      },
      { ...jwtOptions(), expiresIn: TTL_SECONDS },
    );
    await this.redis.set(
      `auth:session:${sessionId}`,
      String(user.id),
      'EX',
      TTL_SECONDS,
    );
    await this.redis.sadd(`auth:user:${user.id}:sessions`, sessionId);
    await this.redis.expire(`auth:user:${user.id}:sessions`, TTL_SECONDS);
    return token;
  }

  async validate(
    token: string,
  ): Promise<{ valid: boolean; userId?: number; provider?: string }> {
    try {
      const claims = await this.jwt.verifyAsync<Claims>(token, jwtOptions());
      if (!Number.isSafeInteger(claims.userId) || !claims.sessionId)
        return { valid: false };
      const active = await this.redis.get(`auth:session:${claims.sessionId}`);
      if (active !== String(claims.userId)) return { valid: false };
      const user = await this.prisma.user.findFirst({
        where: { id: claims.userId, deletedAt: null },
      });
      if (!user) return { valid: false };
      return { valid: true, userId: claims.userId, provider: claims.provider };
    } catch {
      return { valid: false };
    }
  }

  async revoke(token: string) {
    try {
      const claims = await this.jwt.verifyAsync<Claims>(token, jwtOptions());
      await this.redis.del(`auth:session:${claims.sessionId}`);
      await this.redis.srem(
        `auth:user:${claims.userId}:sessions`,
        claims.sessionId,
      );
    } catch {
      // Already expired or invalid tokens have no active session to revoke.
    }
  }

  async revokeAll(userId: number) {
    const key = `auth:user:${userId}:sessions`;
    const sessions = await this.redis.smembers(key);
    if (sessions.length)
      await this.redis.del(...sessions.map((id) => `auth:session:${id}`));
    await this.redis.del(key);
  }
}
