import * as nodemailer from 'nodemailer';
import { EmailService } from './email.service';

jest.mock('nodemailer', () => ({ createTransport: jest.fn() }));

describe('EmailService', () => {
  const sendMail = jest.fn().mockResolvedValue({});

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.SMTP_USER = 'bolloae.kr@gmail.com';
    (nodemailer.createTransport as jest.Mock).mockReturnValue({ sendMail });
  });

  it('uses the 볼래 brand for verification emails', async () => {
    const service = new EmailService();

    await service.sendVerificationCode('member@example.com', '123456');

    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: '"볼래" <bolloae.kr@gmail.com>',
        subject: '[볼래] 이메일 인증 코드',
        html: expect.stringContaining('볼래'),
      }),
    );
    expect(sendMail.mock.calls[0][0].html).not.toContain('drunkenmovie');
  });

  it('uses the 볼래 brand for password reset emails', async () => {
    const service = new EmailService();

    await service.sendPasswordResetLink(
      'member@example.com',
      'https://bollae.kr/reset-password?token=test',
    );

    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: '"볼래" <bolloae.kr@gmail.com>',
        subject: '[볼래] 비밀번호 재설정',
        html: expect.stringContaining(
          'https://bollae.kr/reset-password?token=test',
        ),
      }),
    );
    expect(sendMail.mock.calls[0][0].html).not.toContain('drunkenmovie');
  });
});
