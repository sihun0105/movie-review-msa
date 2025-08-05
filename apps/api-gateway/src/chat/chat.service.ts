import {
  CHAT_PACKAGE_NAME,
  CHAT_SERVICE_NAME,
  ChatService as ChatServiceClient,
  CreateChatRoomRequest,
  GetChatRoomRequest,
  GetChatRoomsRequest,
  SendMessageRequest,
  GetMessagesRequest,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ChatService implements OnModuleInit {
  private chatService: ChatServiceClient;
  constructor(
    @Inject(CHAT_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.chatService =
      this.client.getService<ChatServiceClient>(CHAT_SERVICE_NAME);
  }

  async createChatRoom(request: CreateChatRoomRequest) {
    return this.chatService.createChatRoom(request);
  }

  async getChatRoom(request: GetChatRoomRequest) {
    return this.chatService.getChatRoom(request);
  }

  async getChatRooms(request: GetChatRoomsRequest) {
    return this.chatService.getChatRooms(request);
  }

  async sendMessage(request: SendMessageRequest) {
    return this.chatService.sendMessage(request);
  }

  async getMessages(request: GetMessagesRequest) {
    return this.chatService.getMessages(request);
  }
}
