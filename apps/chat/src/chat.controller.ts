import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import {
  ChatServiceController,
  ChatServiceControllerMethods,
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
} from '@app/common/protobuf';

@Controller()
@ChatServiceControllerMethods()
export class ChatController implements ChatServiceController {
  constructor(private readonly chatService: ChatService) {}

  async createChatRoom(
    request: CreateChatRoomRequest,
  ): Promise<CreateChatRoomResponse> {
    return this.chatService.createChatRoom(request);
  }

  async getChatRoom(request: GetChatRoomRequest): Promise<GetChatRoomResponse> {
    return this.chatService.getChatRoom(request);
  }

  async getChatRooms(
    request: GetChatRoomsRequest,
  ): Promise<GetChatRoomsResponse> {
    return this.chatService.getChatRooms(request);
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    return this.chatService.sendMessage(request);
  }

  async getMessages(request: GetMessagesRequest): Promise<GetMessagesResponse> {
    return this.chatService.getMessages(request);
  }

  // 기존 메서드 유지
  getChat(nowDate: string): Promise<
    {
      id: number;
      message: string;
      createdAt: Date;
      updatedAt: Date;
      nickname: string;
    }[]
  > {
    return this.chatService.getChat(nowDate);
  }
}
