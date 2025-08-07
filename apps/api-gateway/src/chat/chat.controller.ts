import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  CreateChatRoomRequest,
  SendMessageRequest,
} from '@app/common/protobuf';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('rooms')
  @UseGuards(JwtAuthGuard)
  async getChatRooms(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req,
  ) {
    const userId = req.user.userId;
    console.log('Fetching chat rooms for user:', userId);
    return this.chatService.getChatRooms({
      userId,
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 20,
    });
  }

  @Post('rooms')
  @UseGuards(JwtAuthGuard)
  async createChatRoom(@Body() body: CreateChatRoomRequest, @Req() req) {
    const userId = req.user.userId;
    console.log('Creating chat room with user:', userId);
    console.log('Request body:', body);

    return this.chatService.createChatRoom({
      ...body,
      memberIds: [userId, ...body.memberIds], // 요청자도 멤버에 포함
    });
  }

  @Get('rooms/:chatRoomId')
  @UseGuards(JwtAuthGuard)
  async getChatRoom(@Param('chatRoomId') chatRoomId: string, @Req() req) {
    const userId = req.user.userId;
    return this.chatService.getChatRoom({
      chatRoomId,
      userId,
    });
  }

  @Get('rooms/:chatRoomId/messages')
  @UseGuards(JwtAuthGuard)
  async getMessages(
    @Param('chatRoomId') chatRoomId: string,
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req,
  ) {
    const userId = req.user.userId;
    return this.chatService.getMessages({
      chatRoomId,
      userId,
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 50,
    });
  }

  @Post('rooms/:chatRoomId/messages')
  @UseGuards(JwtAuthGuard)
  async sendMessage(
    @Param('chatRoomId') chatRoomId: string,
    @Body() body: SendMessageRequest,
    @Req() req,
  ) {
    const userId = req.user.userId;
    console.log('Sending message in chat room:', chatRoomId);
    console.log('Request body:', body);

    // 채팅방 ID와 사용자 ID를 포함하여 메시지 전송 요청
    return this.chatService.sendMessage({
      chatRoomId,
      senderId: userId,
      content: body.content,
    });
  }
}
