import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ReplyService } from './reply.service';
import { CreateReplyDto, UpdateReplyDto } from '@app/common';
import { RateLimitGuard } from '@app/common/guards/rateLimit/rate-limit.guard';

@Controller('reply')
@UseGuards(RateLimitGuard)
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get()
  async get(@Req() req, @Param('movieId') movieId: number) {
    try {
      //TODO: userNumber AuthGuard로 변경 필요 없는 데이터.
      const userNumber = req.user.id;
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

  @Post()
  async create(@Body() createReplyDto: CreateReplyDto) {
    try {
      const createReplyObservable = this.replyService.create(createReplyDto);
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
  async update(@Body() updateReplyDto: UpdateReplyDto) {
    try {
      const updateReplyObservable = this.replyService.update(updateReplyDto);
      const data = await firstValueFrom(updateReplyObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @Post('delete')
  async delete(@Req() req, @Body() deleteReplyDto: { replyId: number }) {
    try {
      const userNumber = req.user.id;
      const deleteReplyObservable = this.replyService.delete({
        commentId: deleteReplyDto.replyId,
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
