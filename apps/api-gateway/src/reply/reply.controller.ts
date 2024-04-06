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
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';

@Controller('reply')
@UseGuards(JwtAuthGuard, RateLimitGuard)
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get()
  async get(@Req() req, @Param('movieId') movieId: number) {
    try {
      console.log(123);
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
  async create(@Req() req, @Body() createReplyDto: CreateReplyDto) {
    try {
      const userNumber = req.user.id;
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
