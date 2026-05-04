import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendVerificationCode(email: string, code: string): Promise<void> {
    await this.transporter.sendMail({
      from: `"drunkenmovie" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '[drunkenmovie] 이메일 인증 코드',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #0a0a0c; color: #fafafa;">
          <div style="font-size: 20px; font-weight: 700; margin-bottom: 24px;">
            drunken<span style="color: #dc2626;">movie</span>
          </div>
          <p style="color: #a1a1aa; font-size: 14px; margin-bottom: 8px;">이메일 인증 코드입니다.</p>
          <div style="font-size: 36px; font-weight: 700; letter-spacing: 8px; margin: 24px 0; font-family: monospace;">
            ${code}
          </div>
          <p style="color: #a1a1aa; font-size: 12px;">이 코드는 5분간 유효합니다. 본인이 요청하지 않은 경우 무시하세요.</p>
        </div>
      `,
    });
    this.logger.log(`Verification code sent to ${email}`);
  }

  async sendPasswordResetLink(email: string, resetUrl: string): Promise<void> {
    await this.transporter.sendMail({
      from: `"drunkenmovie" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '[drunkenmovie] 비밀번호 재설정',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #0a0a0c; color: #fafafa;">
          <div style="font-size: 20px; font-weight: 700; margin-bottom: 24px;">
            drunken<span style="color: #dc2626;">movie</span>
          </div>
          <p style="color: #a1a1aa; font-size: 14px; margin-bottom: 8px;">비밀번호 재설정 링크입니다.</p>
          <a href="${resetUrl}" style="display: inline-block; margin: 24px 0; padding: 12px 24px; background: #dc2626; color: #fff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 6px;">
            비밀번호 재설정하기
          </a>
          <p style="color: #a1a1aa; font-size: 12px;">이 링크는 1시간 후 만료됩니다. 본인이 요청하지 않은 경우 무시하세요.</p>
        </div>
      `,
    });
    this.logger.log(`Password reset link sent to ${email}`);
  }
}
