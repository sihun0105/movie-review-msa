import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';

@Module({
  imports: [],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
