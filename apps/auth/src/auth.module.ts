import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from './email.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [AuthController],
  providers: [AuthService, EmailService],
})
export class AuthModule {}
