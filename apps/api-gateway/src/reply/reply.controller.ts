import { CreateReplyDto, UpdateReplyDto } from '@app/common/protobuf';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { RateLimitGuard } from '@app/common/guards/rateLimit/rate-limit.guard';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ReplyService } from './reply.service';

@Controller('reply')
@UseGuards(JwtAuthGuard, RateLimitGuard)
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get('/')
  async get(@Req() req, @Query('movieId') movieId: number) {
    try {
      const userNumber = req.user.userId;
      const getRepliesObservable = this.replyService.getReplies({
        movieId: movieId,
        userId: userNumber,
      });
      const data = await firstValueFrom(getRepliesObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @Post('/')
  async create(@Req() req, @Body() createReplyDto: CreateReplyDto) {
    try {
      const userNumber = req.user.userId;
      const createReplyObservable = this.replyService.create({
        ...createReplyDto,
        userId: userNumber,
      });
      const data = await firstValueFrom(createReplyObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @Patch()
  async update(@Req() req, @Body() updateReplyDto: UpdateReplyDto) {
    try {
      const userNumber = req.user.id;
      const updateReplyObservable = this.replyService.update({
        ...updateReplyDto,
        userId: userNumber,
      });
      const data = await firstValueFrom(updateReplyObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @Post('/:replyId')
  async delete(@Req() req, @Param() replyId: { replyId: number }) {
    try {
      const userNumber = req.user.id;
      const $replyId = replyId.replyId;
      const deleteReplyObservable = this.replyService.delete({
        commentId: $replyId,
        userId: userNumber,
      });
      const data = await firstValueFrom(deleteReplyObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }
}
