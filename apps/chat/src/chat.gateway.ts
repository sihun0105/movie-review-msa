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

@WebSocketGateway({ namespace: /\/ws-.+/, cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly chatService: ChatService) {}
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
    await this.chatService.saveMessage(data.channel, userId, data.message);
    const nickName = !isAnonymous
      ? await this.chatService.getNickName(userId)
      : 'Anonymous';
    socket.to(`${socket.nsp.name}-${data.channel}`).emit('message', {
      id: onlineMap[socket.nsp.name][socket.id],
      nickName: nickName,
      message: data.message,
    });
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
