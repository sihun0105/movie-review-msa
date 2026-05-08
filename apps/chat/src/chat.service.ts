import { Injectable } from '@nestjs/common';
import {
  CreateChatRoomRequest,
  GetChatRoomRequest,
  GetChatRoomsRequest,
  GetMessagesRequest,
  SendMessageRequest,
} from '@app/common/protobuf';
import { ChatRoomService } from './chat-room.service';
import { ChatMessageService } from './chat-message.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly roomService: ChatRoomService,
    private readonly messageService: ChatMessageService,
  ) {}

  // Rooms
  createChatRoom(req: CreateChatRoomRequest) {
    return this.roomService.createChatRoom(req);
  }
  getChatRoom(req: GetChatRoomRequest) {
    return this.roomService.getChatRoom(req);
  }
  getChatRooms(req: GetChatRoomsRequest) {
    return this.roomService.getChatRooms(req);
  }

  // Messages
  sendMessage(req: SendMessageRequest) {
    return this.messageService.sendMessage(req);
  }
  getMessages(req: GetMessagesRequest) {
    return this.messageService.getMessages(req);
  }
}
