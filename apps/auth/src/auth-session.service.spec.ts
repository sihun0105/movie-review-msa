import { AuthSessionService } from './auth-session.service';

describe('AuthSessionService', () => {
  const redis = {
    set: jest.fn(),
    get: jest.fn(),
    del: jest.fn(),
    sadd: jest.fn(),
    smembers: jest.fn(),
    srem: jest.fn(),
    expire: jest.fn(),
  };
  const jwt = { signAsync: jest.fn(), verifyAsync: jest.fn() };
  const prisma = { user: { findFirst: jest.fn() } };
  const service = new AuthSessionService(
    redis as never,
    jwt as never,
    prisma as never,
  );

  beforeEach(() => {
    jest.resetAllMocks();
    process.env.JWT_ACCESS_SECRET = 'test-backend-secret';
    jwt.signAsync.mockResolvedValue('server-signed-token');
    jwt.verifyAsync.mockResolvedValue({
      userId: 4,
      sessionId: 'session-1',
      provider: 'google',
      email: 'member@gmail.com',
      nickname: '볼래회원',
      image: 'profile.png',
    });
    redis.get.mockResolvedValue('4');
    prisma.user.findFirst.mockResolvedValue({ id: 4, deletedAt: null });
  });

  it('issues a signed token backed by an expiring server session', async () => {
    const user = {
      id: 4,
      email: 'member@gmail.com',
      nickname: '볼래회원',
      image: 'profile.png',
    };
    expect(await service.issue(user as never, 'google')).toBe(
      'server-signed-token',
    );
    expect(jwt.signAsync).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 4,
        provider: 'google',
        sessionId: expect.any(String),
      }),
      expect.objectContaining({
        secret: 'test-backend-secret',
        issuer: 'bollae-auth',
        audience: 'bollae-api',
      }),
    );
    const sessionId = jwt.signAsync.mock.calls[0][0].sessionId;
    expect(redis.set).toHaveBeenCalledWith(
      `auth:session:${sessionId}`,
      '4',
      'EX',
      2592000,
    );
  });

  it('rejects a revoked session even when its JWT signature is valid', async () => {
    redis.get.mockResolvedValue(null);
    expect(await service.validate('server-signed-token')).toEqual({
      valid: false,
    });
  });

  it('rejects a soft-deleted account with an active Redis session', async () => {
    prisma.user.findFirst.mockResolvedValue(null);
    expect(await service.validate('server-signed-token')).toEqual({
      valid: false,
    });
  });

  it('checks signature, expiry and active server state before exposing identity', async () => {
    expect(await service.validate('server-signed-token')).toMatchObject({
      valid: true,
      userId: 4,
      provider: 'google',
    });
    expect(jwt.verifyAsync).toHaveBeenCalledWith(
      'server-signed-token',
      expect.objectContaining({
        secret: 'test-backend-secret',
        issuer: 'bollae-auth',
        audience: 'bollae-api',
      }),
    );
    jwt.verifyAsync.mockRejectedValue(new Error('expired'));
    expect(await service.validate('expired-token')).toEqual({ valid: false });
  });

  it('revokes the current token and every session after password reset', async () => {
    await service.revoke('server-signed-token');
    expect(redis.del).toHaveBeenCalledWith('auth:session:session-1');
    redis.smembers.mockResolvedValue(['session-1', 'session-2']);
    await service.revokeAll(4);
    expect(redis.del).toHaveBeenCalledWith(
      'auth:session:session-1',
      'auth:session:session-2',
    );
  });
});
