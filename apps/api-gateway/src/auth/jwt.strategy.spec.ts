import { of } from 'rxjs';
import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy', () => {
  const auth = { validateSession: jest.fn() };
  let strategy: JwtStrategy;

  beforeEach(() => {
    process.env.JWT_ACCESS_SECRET = 'backend-only-secret';
    jest.resetAllMocks();
    strategy = new JwtStrategy(auth as never);
  });

  it('accepts only an active backend session for an authenticated request', async () => {
    auth.validateSession.mockReturnValue(of({ valid: true, userId: 4 }));
    await expect(
      strategy.validate(
        { headers: { authorization: 'Bearer backend.token.value' } },
        {},
      ),
    ).resolves.toMatchObject({ userId: 4 });
    expect(auth.validateSession).toHaveBeenCalledWith('backend.token.value');
  });

  it('rejects revoked or missing backend tokens', async () => {
    auth.validateSession.mockReturnValue(of({ valid: false }));
    await expect(
      strategy.validate(
        { headers: { authorization: 'Bearer revoked.token.value' } },
        {},
      ),
    ).rejects.toThrow();
    await expect(strategy.validate({ headers: {} }, {})).rejects.toThrow();
  });
});
