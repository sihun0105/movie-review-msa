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
import { ChatService } from './chat.service';
import { MySQLPrismaService } from '@app/prisma';

@WebSocketGateway({ namespace: /\/ws-.+/, cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly chatService: ChatService,
    private readonly prisma: MySQLPrismaService,
  ) {}
  @WebSocketServer() public server: Server;

  @SubscribeMessage('health')
  handleHealth(@ConnectedSocket() socket: Socket) {
    console.log('health', socket.nsp.name);
    return 'pong';
  }

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() data: { channel: number; userId: number; message: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const isAnonymous = typeof data.userId !== 'number';
    const userId = isAnonymous ? 1 : data.userId;
    console.log('handleMessage', data, socket.nsp.name, userId);
    await this.chatService.saveMessage(data.channel, userId, data.message);
    const nickName = !isAnonymous
      ? await this.chatService.getNickName(userId)
      : 'Anonymous';
    // 수정된 코드 (본인 포함)
    socket.nsp.to(`${socket.nsp.name}-${data.channel}`).emit('message', {
      id: onlineMap[socket.nsp.name][socket.id],
      nickName: nickName,
      message: data.message,
    });
    // socket.to(`${socket.nsp.name}-${data.channel}`).emit('message', {
    //   id: onlineMap[socket.nsp.name][socket.id],
    //   nickName: nickName,
    //   message: data.message,
    // });
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

  @SubscribeMessage('login')
  handleLogin(
    @MessageBody() data: { id: number; channels: number[] },
    @ConnectedSocket() socket: Socket,
  ) {
    console.log('login', data);
    const newNamespace = socket.nsp;
    if (!onlineMap[socket.nsp.name]) {
      onlineMap[socket.nsp.name] = {};
    }
    onlineMap[socket.nsp.name][socket.id] = data.id;
    newNamespace.emit('onlineList', Object.values(onlineMap[socket.nsp.name]));

    const channels = Array.isArray(data.channels) ? data.channels : [];
    channels.forEach((channel) => {
      console.log('join', socket.nsp.name, channel);
      socket.join(`${socket.nsp.name}-${channel}`);
    });
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
