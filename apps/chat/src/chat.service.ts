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
  async getNickName(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async getChat(nowDate: string) {
    return this.prisma.channelchats
      .findMany({
        where: {
          createdAt: {
            gte: new Date(nowDate),
          },
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          User: {
            select: {
              nickname: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 10,
      })
      .then((chats) =>
        chats.map((chat) => ({
          id: chat.id,
          message: chat.content,
          createdAt: chat.createdAt,
          updatedAt: chat.updatedAt,
          nickname: chat.User ? chat.User.nickname : null,
        })),
      )
      .then((chats) => {
        return chats.sort(
          (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
        );
      });
  }
}
