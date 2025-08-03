import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import {
  CreateChatRoomRequest,
  GetChatRoomRequest,
  GetChatRoomsRequest,
  SendMessageRequest,
  GetMessagesRequest,
  CreateChatRoomResponse,
  GetChatRoomResponse,
  GetChatRoomsResponse,
  SendMessageResponse,
  GetMessagesResponse,
  ChatRoom,
  ChatMessage,
} from '@app/common/protobuf';

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

  // 새로운 1:1 채팅방 생성
  async createChatRoom(
    request: CreateChatRoomRequest,
  ): Promise<CreateChatRoomResponse> {
    const { memberIds, roomName, type = 'direct' } = request;

    // direct 타입인 경우 2명만 허용
    if (type === 'direct' && memberIds.length !== 2) {
      throw new BadRequestException(
        'Direct chat room must have exactly 2 members',
      );
    }

    // 기존 1:1 채팅방이 있는지 확인 (direct 타입인 경우)
    if (type === 'direct') {
      const existingRoom = await this.prisma.chatRoom.findFirst({
        where: {
          type: 'direct',
          ChatRoomMember: {
            every: {
              userId: { in: memberIds },
              leftAt: null,
            },
          },
        },
        include: {
          ChatRoomMember: {
            where: { leftAt: null },
          },
        },
      });

      if (existingRoom && existingRoom.ChatRoomMember.length === 2) {
        // 기존 채팅방 반환
        return {
          chatRoom: {
            id: existingRoom.id,
            name: existingRoom.name,
            type: existingRoom.type,
            memberIds: existingRoom.ChatRoomMember.map(
              (member) => member.userId,
            ),
            createdAt: existingRoom.createdAt.toISOString(),
            updatedAt: existingRoom.updatedAt.toISOString(),
          },
        };
      }
    }

    // 새 채팅방 생성
    const chatRoom = await this.prisma.chatRoom.create({
      data: {
        name: roomName,
        type: type as any,
        ChatRoomMember: {
          create: memberIds.map((userId) => ({ userId })),
        },
      },
      include: {
        ChatRoomMember: {
          where: { leftAt: null },
        },
      },
    });

    return {
      chatRoom: {
        id: chatRoom.id,
        name: chatRoom.name,
        type: chatRoom.type,
        memberIds: chatRoom.ChatRoomMember.map((member) => member.userId),
        createdAt: chatRoom.createdAt.toISOString(),
        updatedAt: chatRoom.updatedAt.toISOString(),
      },
    };
  }

  // 채팅방 정보 조회
  async getChatRoom(request: GetChatRoomRequest): Promise<GetChatRoomResponse> {
    const { chatRoomId, userId } = request;

    const chatRoom = await this.prisma.chatRoom.findFirst({
      where: {
        id: chatRoomId,
        ChatRoomMember: {
          some: {
            userId,
            leftAt: null,
          },
        },
      },
      include: {
        ChatRoomMember: {
          where: { leftAt: null },
        },
      },
    });

    if (!chatRoom) {
      throw new NotFoundException(
        'Chat room not found or you are not a member',
      );
    }

    return {
      chatRoom: {
        id: chatRoom.id,
        name: chatRoom.name,
        type: chatRoom.type,
        memberIds: chatRoom.ChatRoomMember.map((member) => member.userId),
        createdAt: chatRoom.createdAt.toISOString(),
        updatedAt: chatRoom.updatedAt.toISOString(),
      },
    };
  }

  // 사용자의 채팅방 목록 조회
  async getChatRooms(
    request: GetChatRoomsRequest,
  ): Promise<GetChatRoomsResponse> {
    const { userId, page = 1, pageSize = 20 } = request;
    const skip = (page - 1) * pageSize;

    const chatRooms = await this.prisma.chatRoom.findMany({
      where: {
        ChatRoomMember: {
          some: {
            userId,
            leftAt: null,
          },
        },
      },
      include: {
        ChatRoomMember: {
          where: { leftAt: null },
        },
        ChatMessage: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      skip,
      take: pageSize + 1,
    });

    const hasNext = chatRooms.length > pageSize;
    if (hasNext) {
      chatRooms.pop();
    }

    const formattedChatRooms: ChatRoom[] = chatRooms.map((room) => ({
      id: room.id,
      name: room.name,
      type: room.type,
      memberIds: room.ChatRoomMember.map((member) => member.userId),
      createdAt: room.createdAt.toISOString(),
      updatedAt: room.updatedAt.toISOString(),
    }));

    return {
      chatRooms: formattedChatRooms,
      hasNext,
    };
  }

  // 메시지 전송
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    const { chatRoomId, senderId, content } = request;

    // 채팅방 멤버인지 확인
    const membership = await this.prisma.chatRoomMember.findFirst({
      where: {
        chatRoomId,
        userId: senderId,
        leftAt: null,
      },
    });

    if (!membership) {
      throw new BadRequestException('You are not a member of this chat room');
    }

    // 메시지 생성
    const message = await this.prisma.chatMessage.create({
      data: {
        chatRoomId,
        senderId,
        content,
      },
    });

    // 채팅방 업데이트 시간 갱신
    await this.prisma.chatRoom.update({
      where: { id: chatRoomId },
      data: { updatedAt: new Date() },
    });

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

  // 메시지 목록 조회
  async getMessages(request: GetMessagesRequest): Promise<GetMessagesResponse> {
    const { chatRoomId, userId, page = 1, pageSize = 50 } = request;
    const skip = (page - 1) * pageSize;

    // 채팅방 멤버인지 확인
    const membership = await this.prisma.chatRoomMember.findFirst({
      where: {
        chatRoomId,
        userId,
        leftAt: null,
      },
    });

    if (!membership) {
      throw new BadRequestException('You are not a member of this chat room');
    }

    const messages = await this.prisma.chatMessage.findMany({
      where: {
        chatRoomId,
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: pageSize + 1,
    });

    const hasNext = messages.length > pageSize;
    if (hasNext) {
      messages.pop();
    }

    const formattedMessages: ChatMessage[] = messages.map((msg) => ({
      id: msg.id,
      chatRoomId: msg.chatRoomId,
      senderId: msg.senderId,
      content: msg.content,
      createdAt: msg.createdAt.toISOString(),
    }));

    return {
      messages: formattedMessages.reverse(), // 시간순 정렬
      hasNext,
    };
  }
}
