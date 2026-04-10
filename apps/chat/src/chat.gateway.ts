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
import { Server, Socket } from 'socket.io';
import { onlineMap } from './online.map';
import { MySQLPrismaService } from '@app/prisma';

@WebSocketGateway({ namespace: /\/ws-.+/, cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly prisma: MySQLPrismaService) {}
  @WebSocketServer() public server: Server;

  @SubscribeMessage('health')
  handleHealth(@ConnectedSocket() socket: Socket) {
    console.log('health', socket.nsp.name);
    return 'pong';
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
    console.log('handleSendMessage', data, socket.nsp.name);
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
      console.error('Error handling sendMessage:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() data: { userId: number; chatRoomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    console.log('handleJoinRoom', data, socket.nsp.name);

    // 온라인 맵에 사용자 추가
    if (!onlineMap[socket.nsp.name]) {
      onlineMap[socket.nsp.name] = {};
    }
    onlineMap[socket.nsp.name][socket.id] = data.userId;

    // 채팅방에 참여
    const roomName = `${socket.nsp.name}-${data.chatRoomId}`;
    socket.join(roomName);
    console.log(`User ${data.userId} joined room ${roomName}`);

    // 온라인 사용자 목록 업데이트
    socket.nsp.emit('onlineList', Object.values(onlineMap[socket.nsp.name]));
  }

  afterInit(_server: Server): any {
    console.log(_server);
    console.log('init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    console.log('connected', socket.nsp.name);
    if (!onlineMap[socket.nsp.name]) {
      onlineMap[socket.nsp.name] = {};
    }
    socket.emit('hello', socket.nsp.name);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    console.log('disconnected', socket.nsp.name);
    const newNamespace = socket.nsp;
    if (onlineMap[socket.nsp.name]) {
      delete onlineMap[socket.nsp.name][socket.id];
      newNamespace.emit(
        'onlineList',
        Object.values(onlineMap[socket.nsp.name]),
      );
    }
  }
}
