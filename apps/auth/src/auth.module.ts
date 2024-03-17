import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, UtilsModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
