import { EmailVerificationCodeStore } from './email-verification-code';

describe('EmailVerificationCodeStore', () => {
  const redis = {
    set: jest.fn(),
    eval: jest.fn(),
  };
  const now = new Date('2026-08-13T00:00:00.000Z').getTime();
  const store = new EmailVerificationCodeStore(redis as never);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Date, 'now').mockReturnValue(now);
  });

  afterEach(() => jest.restoreAllMocks());

  it('stores a code with a five-minute Redis TTL and absolute expiry', async () => {
    const storedValue = await store.save('member@example.com', '123456');

    expect(redis.set).toHaveBeenCalledWith(
      'verify:member@example.com',
      JSON.stringify({ code: '123456', expiresAt: now + 300_000 }),
      'EX',
      300,
    );
    expect(storedValue).toBe(
      JSON.stringify({ code: '123456', expiresAt: now + 300_000 }),
    );
  });

  it('discards a failed delivery only when its stored value is still current', async () => {
    redis.eval.mockResolvedValue(0);

    await store.discardIfCurrent('member@example.com', 'older-value');

    expect(redis.eval).toHaveBeenCalledWith(
      expect.stringContaining("redis.call('GET', KEYS[1]) == ARGV[1]"),
      1,
      'verify:member@example.com',
      'older-value',
    );
  });

  it('consumes a matching unexpired code atomically', async () => {
    redis.eval.mockResolvedValue(1);

    await expect(store.consume('member@example.com', '123456')).resolves.toBe(
      'verified',
    );
    expect(redis.eval).toHaveBeenCalledWith(
      expect.stringContaining("redis.call('DEL', KEYS[1])"),
      1,
      'verify:member@example.com',
      '123456',
      String(now),
    );
  });

  it('keeps legacy values compatible while consuming them atomically', async () => {
    redis.eval.mockResolvedValue(1);

    await store.consume('member@example.com', '123456');

    expect(redis.eval).toHaveBeenCalledWith(
      expect.stringContaining("string.sub(raw, 1, 1) ~= '{'"),
      1,
      'verify:member@example.com',
      '123456',
      String(now),
    );
  });

  it.each([
    [-1, 'mismatch'],
    [0, 'expired'],
  ])('maps Redis result %s to %s', async (redisResult, expected) => {
    redis.eval.mockResolvedValue(redisResult);

    await expect(store.consume('member@example.com', '123456')).resolves.toBe(
      expected,
    );
  });
});
