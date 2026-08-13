import { AuthService } from './auth.service';

describe('AuthService verification email flow', () => {
  const prisma = { user: { findUnique: jest.fn() } };
  const email = { sendVerificationCode: jest.fn() };
  const resetTokens = {};
  const verificationCodes = {
    save: jest.fn(),
    discardIfCurrent: jest.fn(),
    consume: jest.fn(),
  };
  const service = new AuthService(
    prisma as never,
    email as never,
    resetTokens as never,
    verificationCodes as never,
  );

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.user.findUnique.mockResolvedValue(null);
    verificationCodes.save.mockResolvedValue('stored-value');
  });

  it('removes the saved code when email delivery fails', async () => {
    email.sendVerificationCode.mockRejectedValue(new Error('SMTP unavailable'));

    await expect(service.sendVerificationCode('member@example.com')).resolves.toEqual({
      success: false,
      message: '이메일 발송에 실패했습니다.',
    });
    expect(verificationCodes.discardIfCurrent).toHaveBeenCalledWith(
      'member@example.com',
      'stored-value',
    );
  });

  it('treats a missing or expired code as unavailable', async () => {
    verificationCodes.consume.mockResolvedValue('expired');

    await expect(
      service.verifyCode('member@example.com', '123456'),
    ).resolves.toEqual({
      isAvailable: false,
      message: '인증 코드가 존재하지 않거나 만료됐습니다.',
    });
  });

  it('keeps the existing wrong-code response', async () => {
    verificationCodes.consume.mockResolvedValue('mismatch');

    await expect(
      service.verifyCode('member@example.com', '654321'),
    ).resolves.toEqual({
      isAvailable: false,
      message: '인증 코드가 올바르지 않습니다.',
    });
  });
});
