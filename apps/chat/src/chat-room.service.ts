import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import {
  ChatRoom,
  CreateChatRoomRequest,
  CreateChatRoomResponse,
  GetChatRoomRequest,
  GetChatRoomResponse,
  GetChatRoomsRequest,
  GetChatRoomsResponse,
} from '@app/common/protobuf';

@Injectable()
export class ChatRoomService {
  private readonly logger = new Logger(ChatRoomService.name);
  constructor(private readonly prisma: MySQLPrismaService) {}

  private formatRoom(room: any): ChatRoom {
    return {
      id: room.id,
      name: room.name,
      type: room.type,
      memberIds: room.ChatRoomMember.map((m: any) => m.userId),
      createdAt: room.createdAt.toISOString(),
      updatedAt: room.updatedAt.toISOString(),
      matchPostId: room.matchPostId ?? '',
    };
  }

  async createChatRoom(
    request: CreateChatRoomRequest,
  ): Promise<CreateChatRoomResponse> {
    const { memberIds, roomName, type = 'direct', matchPostId } = request;
    this.logger.log(`createChatRoom type=${type} members=${memberIds.join(',')}`);

    if (type === 'direct' && memberIds.length !== 2) {
      throw new BadRequestException(
        'Direct chat room must have exactly 2 members',
      );
    }

    if (type === 'direct') {
      const existingRoom = await this.prisma.chatRoom.findFirst({
        where: {
          type: 'direct',
          ChatRoomMember: {
            every: { userId: { in: memberIds }, leftAt: null },
          },
        },
        include: { ChatRoomMember: { where: { leftAt: null } } },
      });

      if (existingRoom && existingRoom.ChatRoomMember.length === 2) {
        // 기존 방 재사용: matchPostId가 새로 들어왔고 기존에 없으면 채워줌
        if (matchPostId && !existingRoom.matchPostId) {
          const updated = await this.prisma.chatRoom.update({
            where: { id: existingRoom.id },
            data: { matchPostId },
            include: { ChatRoomMember: { where: { leftAt: null } } },
          });
          return { chatRoom: this.formatRoom(updated) };
        }
        return { chatRoom: this.formatRoom(existingRoom) };
      }
    }

    const chatRoom = await this.prisma.chatRoom.create({
      data: {
        name: roomName,
        type: type as any,
        matchPostId: matchPostId || null,
        ChatRoomMember: {
          create: memberIds.map((userId) => ({ userId })),
        },
      },
      include: { ChatRoomMember: { where: { leftAt: null } } },
    });

    return { chatRoom: this.formatRoom(chatRoom) };
  }

  async getChatRoom(request: GetChatRoomRequest): Promise<GetChatRoomResponse> {
    const { chatRoomId, userId } = request;
    const chatRoom = await this.prisma.chatRoom.findFirst({
      where: {
        id: chatRoomId,
        ChatRoomMember: { some: { userId, leftAt: null } },
      },
      include: { ChatRoomMember: { where: { leftAt: null } } },
    });

    if (!chatRoom) {
      throw new NotFoundException(
        'Chat room not found or you are not a member',
      );
    }

    return { chatRoom: this.formatRoom(chatRoom) };
  }

  async getChatRooms(
    request: GetChatRoomsRequest,
  ): Promise<GetChatRoomsResponse> {
    const { userId, page = 1, pageSize = 20 } = request;
    const skip = (page - 1) * pageSize;

    const chatRooms = await this.prisma.chatRoom.findMany({
      where: {
        ChatRoomMember: { some: { userId, leftAt: null } },
      },
      include: {
        ChatRoomMember: { where: { leftAt: null } },
        ChatMessage: { orderBy: { createdAt: 'desc' }, take: 1 },
      },
      orderBy: { updatedAt: 'desc' },
      skip,
      take: pageSize + 1,
    });

    const hasNext = chatRooms.length > pageSize;
    if (hasNext) chatRooms.pop();

    return {
      chatRooms: chatRooms.map((r) => this.formatRoom(r)),
      hasNext,
    };
  }
}
