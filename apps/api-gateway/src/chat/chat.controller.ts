import {
  Body,
  Controller,
  Get,
  Logger,
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
  private readonly logger = new Logger(ChatController.name);
  constructor(private readonly chatService: ChatService) {}

  @Get('rooms')
  @UseGuards(JwtAuthGuard)
  async getChatRooms(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req,
  ) {
    const userId = req.user.userId;
    this.logger.debug(`getChatRooms userId=${userId}`);
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
    this.logger.log(`createChatRoom userId=${userId}`);

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
    this.logger.debug(`sendMessage room=${chatRoomId} sender=${userId}`);

    // 채팅방 ID와 사용자 ID를 포함하여 메시지 전송 요청
    return this.chatService.sendMessage({
      chatRoomId,
      senderId: userId,
      content: body.content,
    });
  }
}
