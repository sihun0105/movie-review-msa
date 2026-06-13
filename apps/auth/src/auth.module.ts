import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from './email.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';
import Redis from 'ioredis';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'REDIS',
      useFactory: () =>
        new Redis(process.env.REDIS_URL || 'redis://localhost:6379'),
    },
    AuthService,
    EmailService,
  ],
})
export class AuthModule {}
