import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, UtilsModule, JwtModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
