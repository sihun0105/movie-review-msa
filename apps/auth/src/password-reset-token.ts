import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

const RESET_TTL_SECONDS = 60 * 60;

interface ResetTokenValue {
  email: string;
  expiresAt: number;
}

@Injectable()
export class PasswordResetTokenStore {
  constructor(@Inject('REDIS') private readonly redis: Redis) {}

  async save(token: string, email: string): Promise<void> {
    const value: ResetTokenValue = {
      email,
      expiresAt: Date.now() + RESET_TTL_SECONDS * 1000,
    };
    await this.redis.set(
      this.key(token),
      JSON.stringify(value),
      'EX',
      RESET_TTL_SECONDS,
    );
  }

  async getEmail(token: string): Promise<string | null> {
    const raw = await this.redis.get(this.key(token));
    if (!raw) return null;

    if (!raw.startsWith('{')) return raw;

    const value = this.parse(raw);
    if (!value || value.expiresAt <= Date.now()) {
      await this.delete(token);
      return null;
    }
    return value.email;
  }

  async isValid(token: string): Promise<boolean> {
    return Boolean(await this.getEmail(token));
  }

  async delete(token: string): Promise<void> {
    await this.redis.del(this.key(token));
  }

  private key(token: string): string {
    return `reset:${token}`;
  }

  private parse(raw: string): ResetTokenValue | null {
    try {
      const value = JSON.parse(raw) as Partial<ResetTokenValue>;
      return typeof value.email === 'string' && typeof value.expiresAt === 'number'
        ? (value as ResetTokenValue)
        : null;
    } catch {
      return null;
    }
  }
}
