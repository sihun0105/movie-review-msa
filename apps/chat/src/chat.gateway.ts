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
import { PublicChatPayload, PublicChatService } from './public-chat.service';

@WebSocketGateway({ namespace: /\/ws-.+/, cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ChatGateway.name);
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly publicChatService: PublicChatService,
  ) {}
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

    try {
      const message = await this.publicChatService.createMessage(data);
      if (message) socket.nsp.emit('message', message);
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
      onlineMap[socket.nsp.name][socket.id] = socket.id;
      this.emitPublicOnlineCount(socket);
      await this.sendPublicHistory(socket);
    }
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.verbose(`disconnected ${socket.nsp.name}`);
    const newNamespace = socket.nsp;
    if (onlineMap[socket.nsp.name]) {
      delete onlineMap[socket.nsp.name][socket.id];
      if (socket.nsp.name === '/ws-public') {
        this.emitPublicOnlineCount(socket);
      } else {
        newNamespace.emit(
          'onlineList',
          Object.values(onlineMap[socket.nsp.name]),
        );
      }
    }
  }

  private async sendPublicHistory(socket: Socket) {
    socket.emit('history', await this.publicChatService.getHistory());
  }

  private emitPublicOnlineCount(socket: Socket) {
    socket.nsp.emit(
      'onlineCount',
      Object.keys(onlineMap[socket.nsp.name] ?? {}).length,
    );
  }

}
