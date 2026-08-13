import { PasswordResetTokenStore } from './password-reset-token';

describe('PasswordResetTokenStore', () => {
  const redis = {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  };
  const now = new Date('2026-08-13T00:00:00.000Z').getTime();
  const store = new PasswordResetTokenStore(redis as never);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Date, 'now').mockReturnValue(now);
  });

  afterEach(() => jest.restoreAllMocks());

  it('stores a token with a one-hour Redis TTL and absolute expiry', async () => {
    await store.save('token', 'member@example.com');

    expect(redis.set).toHaveBeenCalledWith(
      'reset:token',
      JSON.stringify({ email: 'member@example.com', expiresAt: now + 3_600_000 }),
      'EX',
      3_600,
    );
  });

  it('rejects and deletes a token past its absolute expiry', async () => {
    redis.get.mockResolvedValue(
      JSON.stringify({ email: 'member@example.com', expiresAt: now - 1 }),
    );

    await expect(store.getEmail('token')).resolves.toBeNull();
    expect(redis.del).toHaveBeenCalledWith('reset:token');
  });

  it('reports whether a reset token is currently valid', async () => {
    redis.get.mockResolvedValue(
      JSON.stringify({ email: 'member@example.com', expiresAt: now + 1 }),
    );

    await expect(store.isValid('token')).resolves.toBe(true);
  });

  it('keeps legacy Redis tokens valid until their existing TTL expires', async () => {
    redis.get.mockResolvedValue('member@example.com');

    await expect(store.getEmail('legacy-token')).resolves.toBe(
      'member@example.com',
    );
  });
});
