import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from './email.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';
import Redis from 'ioredis';
import { PasswordResetTokenStore } from './password-reset-token';
import { EmailVerificationCodeStore } from './email-verification-code';
import { JwtModule } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { AuthSessionService } from './auth-session.service';
import { GoogleIdentityService } from './google-identity.service';

@Module({
  imports: [PrismaModule, UtilsModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    {
      provide: 'REDIS',
      useFactory: () =>
        new Redis(process.env.REDIS_URL || 'redis://localhost:6379'),
    },
    PasswordResetTokenStore,
    EmailVerificationCodeStore,
    { provide: OAuth2Client, useFactory: () => new OAuth2Client() },
    GoogleIdentityService,
    AuthSessionService,
    AuthService,
    EmailService,
  ],
})
export class AuthModule {}
