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
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 0;">
    <tr><td align="center">
      <table width="480" cellpadding="0" cellspacing="0" style="background:#0d0d10;border:1px solid #262629;border-radius:8px;overflow:hidden;max-width:480px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="padding:28px 32px 20px;border-bottom:1px solid #262629;">
            <span style="font-size:18px;font-weight:700;color:#fafafa;letter-spacing:-0.5px;">
              drunken<span style="color:#dc2626;">movie</span>
            </span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 8px;font-size:13px;color:#a1a1aa;">이메일 인증 코드가 도착했습니다.</p>
            <p style="margin:0 0 28px;font-size:13px;color:#a1a1aa;">아래 6자리 코드를 입력해 이메일 인증을 완료하세요.</p>
            <!-- Code block -->
            <div style="background:#09090b;border:1px solid #262629;border-radius:6px;padding:24px;text-align:center;margin-bottom:28px;">
              <span style="font-size:40px;font-weight:700;letter-spacing:12px;color:#fafafa;font-family:'Courier New',monospace;">${code}</span>
            </div>
            <p style="margin:0;font-size:12px;color:#52525b;line-height:1.6;">
              이 코드는 <strong style="color:#a1a1aa;">5분간</strong> 유효합니다.<br>
              본인이 요청하지 않은 경우 이 이메일을 무시하세요.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;border-top:1px solid #262629;">
            <p style="margin:0;font-size:11px;color:#3f3f46;">drunkenmovie — 영화와 함께하는 순간</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });
    this.logger.log(`Verification code sent to ${email}`);
  }

  async sendPasswordResetLink(email: string, resetUrl: string): Promise<void> {
    await this.transporter.sendMail({
      from: `"drunkenmovie" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '[drunkenmovie] 비밀번호 재설정',
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 0;">
    <tr><td align="center">
      <table width="480" cellpadding="0" cellspacing="0" style="background:#0d0d10;border:1px solid #262629;border-radius:8px;overflow:hidden;max-width:480px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="padding:28px 32px 20px;border-bottom:1px solid #262629;">
            <span style="font-size:18px;font-weight:700;color:#fafafa;letter-spacing:-0.5px;">
              drunken<span style="color:#dc2626;">movie</span>
            </span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 8px;font-size:13px;color:#a1a1aa;">비밀번호 재설정 요청이 접수됐습니다.</p>
            <p style="margin:0 0 28px;font-size:13px;color:#a1a1aa;">아래 버튼을 클릭하거나 링크를 브라우저에 직접 붙여넣어 비밀번호를 재설정하세요.</p>
            <!-- CTA Button -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
              <tr>
                <td align="center">
                  <a href="${resetUrl}"
                     style="display:inline-block;padding:13px 32px;background:#dc2626;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;border-radius:6px;letter-spacing:-0.2px;">
                    비밀번호 재설정하기
                  </a>
                </td>
              </tr>
            </table>
            <!-- Fallback URL (IP 환경에서 버튼 링크가 차단될 경우 대비) -->
            <div style="background:#09090b;border:1px solid #262629;border-radius:6px;padding:14px 16px;margin-bottom:28px;word-break:break-all;">
              <p style="margin:0 0 4px;font-size:10px;color:#52525b;text-transform:uppercase;letter-spacing:0.8px;">재설정 링크</p>
              <span style="font-size:12px;color:#a1a1aa;font-family:'Courier New',monospace;">${resetUrl}</span>
            </div>
            <p style="margin:0;font-size:12px;color:#52525b;line-height:1.6;">
              이 링크는 <strong style="color:#a1a1aa;">1시간 후</strong> 만료됩니다.<br>
              본인이 요청하지 않은 경우 이 이메일을 무시하세요.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;border-top:1px solid #262629;">
            <p style="margin:0;font-size:11px;color:#3f3f46;">drunkenmovie — 영화와 함께하는 순간</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });
    this.logger.log(`Password reset link sent to ${email}`);
  }
}
