import Redis from 'ioredis';
import { EmailVerificationCodeStore } from './email-verification-code';

const redisUrl = process.env.TEST_REDIS_URL;
const describeWithRedis = redisUrl ? describe : describe.skip;

describeWithRedis('EmailVerificationCodeStore integration', () => {
  const email = `ttl-test-${process.pid}@example.invalid`;
  const key = `verify:${email}`;
  const redis = redisUrl ? new Redis(redisUrl) : null;
  const store = new EmailVerificationCodeStore(redis!);

  afterEach(async () => redis!.del(key));
  afterAll(async () => redis!.quit());

  it('stores a five-minute TTL and consumes a code once', async () => {
    await store.save(email, '123456');

    expect(await redis!.ttl(key)).toBeGreaterThan(295);
    await expect(store.consume(email, '123456')).resolves.toBe('verified');
    await expect(store.consume(email, '123456')).resolves.toBe('expired');
  });

  it('does not let an older failed delivery delete a newer code', async () => {
    const older = await store.save(email, '111111');
    await store.save(email, '222222');

    await store.discardIfCurrent(email, older);

    await expect(store.consume(email, '222222')).resolves.toBe('verified');
  });

  it('deletes the current code after its email delivery fails', async () => {
    const current = await store.save(email, '123456');

    await store.discardIfCurrent(email, current);

    expect(await redis!.exists(key)).toBe(0);
  });

  it('rejects an absolute expiry even while the Redis TTL remains', async () => {
    await redis!.set(
      key,
      JSON.stringify({ code: '123456', expiresAt: Date.now() - 1 }),
      'EX',
      300,
    );

    await expect(store.consume(email, '123456')).resolves.toBe('expired');
    expect(await redis!.exists(key)).toBe(0);
  });

  it('supports a legacy raw code until its Redis TTL expires', async () => {
    await redis!.set(key, '123456', 'EX', 300);

    await expect(store.consume(email, '654321')).resolves.toBe('mismatch');
    await expect(store.consume(email, '123456')).resolves.toBe('verified');
  });
});
