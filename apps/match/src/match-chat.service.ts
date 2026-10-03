import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ChatService } from '@app/common/protobuf';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MatchChatService implements OnModuleInit {
  private readonly logger = new Logger(MatchChatService.name);
  private chatService: ChatService;

  constructor(@Inject('CHAT_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.chatService = this.client.getService<ChatService>('ChatService');
  }

  async createRoom(
    matchId: string,
    authorUserno: number,
    applicantUserno: number,
  ) {
    try {
      const response = await firstValueFrom(
        this.chatService.createChatRoom({
          memberIds: [authorUserno, applicantUserno],
          roomName: `Match Chat - ${matchId}`,
          type: 'direct',
          matchPostId: matchId,
        }),
      );
      return response.chatRoom.id;
    } catch (error) {
      this.logger.error('Failed to create chat room', error?.stack ?? error);
      throw new BadRequestException('Failed to create chat room');
    }
  }
}
