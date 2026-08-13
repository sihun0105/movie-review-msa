import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

const VERIFICATION_TTL_SECONDS = 5 * 60;

interface VerificationCodeValue {
  code: string;
  expiresAt: number;
}

export type VerificationCodeResult = 'verified' | 'mismatch' | 'expired';

const DISCARD_IF_CURRENT_SCRIPT = `
if redis.call('GET', KEYS[1]) == ARGV[1] then
  return redis.call('DEL', KEYS[1])
end
return 0
`;

const CONSUME_SCRIPT = `
local raw = redis.call('GET', KEYS[1])
if not raw then return 0 end
if string.sub(raw, 1, 1) ~= '{' then
  if raw == ARGV[1] then
    redis.call('DEL', KEYS[1])
    return 1
  end
  return -1
end
local ok, value = pcall(cjson.decode, raw)
if not ok or type(value) ~= 'table'
  or type(value.code) ~= 'string'
  or type(value.expiresAt) ~= 'number' then
  redis.call('DEL', KEYS[1])
  return 0
end
if value.expiresAt <= tonumber(ARGV[2]) then
  redis.call('DEL', KEYS[1])
  return 0
end
if value.code ~= ARGV[1] then return -1 end
redis.call('DEL', KEYS[1])
return 1
`;

@Injectable()
export class EmailVerificationCodeStore {
  constructor(@Inject('REDIS') private readonly redis: Redis) {}

  async save(email: string, code: string): Promise<string> {
    const value: VerificationCodeValue = {
      code,
      expiresAt: Date.now() + VERIFICATION_TTL_SECONDS * 1000,
    };
    const serialized = JSON.stringify(value);
    await this.redis.set(
      this.key(email),
      serialized,
      'EX',
      VERIFICATION_TTL_SECONDS,
    );
    return serialized;
  }

  async discardIfCurrent(email: string, serialized: string): Promise<void> {
    await this.redis.eval(
      DISCARD_IF_CURRENT_SCRIPT,
      1,
      this.key(email),
      serialized,
    );
  }

  async consume(email: string, code: string): Promise<VerificationCodeResult> {
    const result = await this.redis.eval(
      CONSUME_SCRIPT,
      1,
      this.key(email),
      code,
      String(Date.now()),
    );
    if (Number(result) === 1) return 'verified';
    return Number(result) === -1 ? 'mismatch' : 'expired';
  }

  private key(email: string): string {
    return `verify:${email}`;
  }
}
