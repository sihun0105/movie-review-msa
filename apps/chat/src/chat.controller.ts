import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('chat')
  getChat(): Promise<
    {
      id: number;
      content: string;
      createdAt: Date;
      updatedAt: Date;
      UserId: number | null;
      ChannelId: number | null;
    }[]
  > {
    return this.chatService.getChat();
  }
}
