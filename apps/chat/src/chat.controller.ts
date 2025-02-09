import { Controller, Get, Query } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('chat')
  getChat(@Query('nowDate') nowDate: string): Promise<
    {
      id: number;
      message: string;
      createdAt: Date;
      updatedAt: Date;
      nickname: string;
    }[]
  > {
    return this.chatService.getChat(nowDate);
  }
}
