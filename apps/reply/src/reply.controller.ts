import { Controller, Get } from '@nestjs/common';
import { ReplyService } from './reply.service';

@Controller()
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get()
  getHello(): string {
    return this.replyService.getHello();
  }
}
