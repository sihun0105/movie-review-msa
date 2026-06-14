import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { onlineMap } from './online.map';
import { MySQLPrismaService } from '@app/prisma';

interface PublicChatPayload {
  clientId?: string;
  nickName?: string;
  message?: string;
  createdAt?: string;
}

interface PublicChatMessageView {
  id: string;
  clientId?: string;
  nickName: string;
  message: string;
  createdAt: string;
}

@WebSocketGateway({ namespace: /\/ws-.+/, cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ChatGateway.name);
  constructor(private readonly prisma: MySQLPrismaService) {}
  @WebSocketServer() public server: Server;

  @SubscribeMessage('health')
  handleHealth(@ConnectedSocket() socket: Socket) {
    this.logger.verbose(`health ${socket.nsp.name}`);
    return 'pong';
  }

  @SubscribeMessage('message')
  async handlePublicMessage(
    @MessageBody() data: PublicChatPayload,
    @ConnectedSocket() socket: Socket,
  ) {
    if (socket.nsp.name !== '/ws-public') return;

    const message = data.message?.trim().slice(0, 500);
    if (!message) return;

    try {
      const savedMessage = await this.prisma.publicChatMessage.create({
        data: {
          clientId: data.clientId || null,
          nickName: data.nickName?.trim().slice(0, 24) || '익명',
          content: message,
        },
      });

      socket.nsp.emit('message', this.toPublicChatView(savedMessage));
    } catch (error) {
      this.logger.error('Error handling public message', error?.stack ?? error);
      socket.emit('error', { message: 'Failed to send public message' });
    }
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @MessageBody()
    data: {
      chatRoomId: string;
      senderId: number;
      content: string;
      messageType?: string;
    },
    @ConnectedSocket() socket: Socket,
  ) {
    this.logger.debug(
      `handleSendMessage ns=${socket.nsp.name} room=${data.chatRoomId}`,
    );
    try {
      // 새로운 Chat 시스템을 사용하여 메시지 저장
      const message = await this.prisma.chatMessage.create({
        data: {
          chatRoomId: data.chatRoomId,
          senderId: data.senderId,
          content: data.content,
        },
      });

      // 사용자 닉네임 가져오기
      const user = await this.prisma.user.findUnique({
        where: { id: data.senderId },
      });

      // 채팅방의 모든 사용자에게 메시지 전송
      socket.nsp.to(`${socket.nsp.name}-${data.chatRoomId}`).emit('message', {
        id: message.id,
        chatRoomId: data.chatRoomId,
        senderId: data.senderId,
        nickName: user?.nickname || 'Unknown',
        content: data.content,
        messageType: data.messageType || 'text',
        createdAt: message.createdAt.toISOString(),
      });
    } catch (error) {
      this.logger.error('Error handling sendMessage', error?.stack ?? error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() data: { userId: number; chatRoomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    this.logger.debug(
      `handleJoinRoom userId=${data.userId} room=${data.chatRoomId} ns=${socket.nsp.name}`,
    );

    // 온라인 맵에 사용자 추가
    if (!onlineMap[socket.nsp.name]) {
      onlineMap[socket.nsp.name] = {};
    }
    onlineMap[socket.nsp.name][socket.id] = data.userId;

    // 채팅방에 참여
    const roomName = `${socket.nsp.name}-${data.chatRoomId}`;
    socket.join(roomName);
    this.logger.log(`User ${data.userId} joined room ${roomName}`);

    // 온라인 사용자 목록 업데이트
    socket.nsp.emit('onlineList', Object.values(onlineMap[socket.nsp.name]));
  }

  afterInit(_server: Server): any {
    this.logger.log('ChatGateway initialized');
  }

  async handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.verbose(`connected ${socket.nsp.name}`);
    if (!onlineMap[socket.nsp.name]) {
      onlineMap[socket.nsp.name] = {};
    }
    socket.emit('hello', socket.nsp.name);
    if (socket.nsp.name === '/ws-public') {
      await this.sendPublicHistory(socket);
    }
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.verbose(`disconnected ${socket.nsp.name}`);
    const newNamespace = socket.nsp;
    if (onlineMap[socket.nsp.name]) {
      delete onlineMap[socket.nsp.name][socket.id];
      newNamespace.emit(
        'onlineList',
        Object.values(onlineMap[socket.nsp.name]),
      );
    }
  }

  private async sendPublicHistory(socket: Socket) {
    const messages = await this.prisma.publicChatMessage.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 80,
    });

    socket.emit(
      'history',
      messages.reverse().map((message) => this.toPublicChatView(message)),
    );
  }

  private toPublicChatView(message: {
    id: string;
    clientId: string | null;
    nickName: string;
    content: string;
    createdAt: Date;
  }): PublicChatMessageView {
    return {
      id: message.id,
      clientId: message.clientId || undefined,
      nickName: message.nickName,
      message: message.content,
      createdAt: message.createdAt.toISOString(),
    };
  }
}
