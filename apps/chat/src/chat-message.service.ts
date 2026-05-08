import {
  BadRequestException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import {
  ChatMessage,
  GetMessagesRequest,
  GetMessagesResponse,
  SendMessageRequest,
  SendMessageResponse,
} from '@app/common/protobuf';

@Injectable()
export class ChatMessageService {
  private readonly logger = new Logger(ChatMessageService.name);
  constructor(private readonly prisma: MySQLPrismaService) {}

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    const { chatRoomId, senderId, content } = request;
    this.logger.debug(`sendMessage room=${chatRoomId} sender=${senderId}`);

    const membership = await this.prisma.chatRoomMember.findFirst({
      where: { chatRoomId, userId: senderId, leftAt: null },
    });
    if (!membership) {
      throw new BadRequestException('You are not a member of this chat room');
    }

    const message = await this.prisma.chatMessage.create({
      data: { chatRoomId, senderId, content },
    });

    await this.prisma.chatRoom.update({
      where: { id: chatRoomId },
      data: { updatedAt: new Date() },
    });

    await this.notifyOtherMembers(chatRoomId, senderId, content);

    return {
      message: {
        id: message.id,
        chatRoomId: message.chatRoomId,
        senderId: message.senderId,
        content: message.content,
        createdAt: message.createdAt.toISOString(),
      },
    };
  }

  private async notifyOtherMembers(
    chatRoomId: string,
    senderId: number,
    content: string,
  ) {
    const [otherMembers, sender] = await Promise.all([
      this.prisma.chatRoomMember.findMany({
        where: { chatRoomId, userId: { not: senderId }, leftAt: null },
      }),
      this.prisma.user.findUnique({
        where: { id: senderId },
        select: { nickname: true },
      }),
    ]);
    const preview = content.length > 40 ? content.slice(0, 40) + '…' : content;
    await Promise.all(
      otherMembers.map((m) =>
        this.prisma.notification
          .create({
            data: {
              userId: m.userId,
              type: 'chat_message',
              title: sender?.nickname || '알 수 없음',
              body: preview,
              targetId: chatRoomId,
            },
          })
          .catch(() => {}),
      ),
    );
  }

  async getMessages(request: GetMessagesRequest): Promise<GetMessagesResponse> {
    const { chatRoomId, userId, page = 1, pageSize = 50 } = request;
    const skip = (page - 1) * pageSize;

    const membership = await this.prisma.chatRoomMember.findFirst({
      where: { chatRoomId, userId, leftAt: null },
    });
    if (!membership) {
      throw new BadRequestException('You are not a member of this chat room');
    }

    const messages = await this.prisma.chatMessage.findMany({
      where: { chatRoomId, deletedAt: null },
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize + 1,
    });

    const hasNext = messages.length > pageSize;
    if (hasNext) messages.pop();

    const formatted: ChatMessage[] = messages.map((msg) => ({
      id: msg.id,
      chatRoomId: msg.chatRoomId,
      senderId: msg.senderId,
      content: msg.content,
      createdAt: msg.createdAt.toISOString(),
    }));

    return {
      messages: formatted.reverse(),
      hasNext,
    };
  }
}
