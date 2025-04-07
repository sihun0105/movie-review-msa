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
import { GetReplySpecDecorator } from './decorator/get-reply-spec-decorator';
import { PostReplySpecDecorator } from './decorator/post-reply-spec-decorator';
import { PatchReplySpecDecorator } from './decorator/patch-reply-spec-decorator';
import { DeleteReplySpecDecorator } from './decorator/delete-reply-spec-decorator';

@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}
  @GetReplySpecDecorator('댓글 조회 API', '댓글 조회')
  @Get('/')
  async get(
    @Req() req,
    @Query('movieId') movieId: number,
    @Query('page') page: number,
  ) {
    try {
      const getRepliesObservable = this.replyService.getReplies({
        movieId: movieId,
        page: page,
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
  @PostReplySpecDecorator('댓글 생성 API', '댓글 생성')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
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
  @PatchReplySpecDecorator('댓글 수정 API', '댓글 수정')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
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
  @DeleteReplySpecDecorator('댓글 삭제 API', '댓글 삭제')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
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
