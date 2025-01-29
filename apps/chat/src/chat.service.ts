import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async saveMessage(channelId: number, userId: number, message: string) {
    console.log('saveMessage', channelId, userId, message);
    return this.prisma.channelchats.create({
      data: {
        ChannelId: channelId,
        content: message,
        UserId: userId,
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
