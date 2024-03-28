import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
