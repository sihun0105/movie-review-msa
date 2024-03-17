import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
