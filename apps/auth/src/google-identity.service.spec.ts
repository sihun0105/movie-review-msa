import { GoogleIdentityService } from './google-identity.service';

describe('GoogleIdentityService', () => {
  const client = { verifyIdToken: jest.fn() };
  const service = new GoogleIdentityService(client as never);
  beforeEach(() => {
    jest.resetAllMocks();
    client.verifyIdToken.mockResolvedValue({
      getPayload: () => ({
        email: 'member@gmail.com',
        email_verified: true,
        sub: 'google-1',
      }),
    });
  });

  it('accepts only a verified Google ID token for the configured app', async () => {
    expect(await service.getEmail('header.payload.signature')).toBe(
      'member@gmail.com',
    );
    expect(client.verifyIdToken).toHaveBeenCalledWith({
      idToken: 'header.payload.signature',
      audience:
        '737850083538-vvhpddci1a1u2fv9ak3lpe2b546rbhdm.apps.googleusercontent.com',
    });
  });

  it('rejects plain email impersonation and unverified accounts', async () => {
    client.verifyIdToken.mockRejectedValueOnce(new Error('Invalid token'));
    await expect(service.getEmail('someone@gmail.com')).rejects.toThrow();
    client.verifyIdToken.mockResolvedValueOnce({
      getPayload: () => ({ email: 'member@gmail.com', email_verified: false }),
    });
    await expect(
      service.getEmail('header.payload.signature'),
    ).rejects.toThrow();
  });
});
