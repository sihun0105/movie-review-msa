import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatRoomService } from './chat-room.service';
import { ChatMessageService } from './chat-message.service';
import { ChatGateway } from './chat.gateway';
import { PublicChatService } from './public-chat.service';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [ChatController],
  providers: [
    ChatService,
    ChatRoomService,
    ChatMessageService,
    PublicChatService,
    ChatGateway,
  ],
})
export class ChatModule {}
