import {
  CreateReplyDto,
  Reply,
  Replys,
  UpdateReplyDto,
} from '@app/common/protobuf';
import { NotFoundException } from '@app/common/filters/rpcexception/rpc-exception';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReplyService {
  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  async create(createReplyDto: CreateReplyDto): Promise<Reply> {
    const { comment, userId, movieId } = createReplyDto;
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id: userId },
    });
    if (!userData) {
      throw new NotFoundException('해당하는 유저가 존재하지 않습니다.');
    }
    await this.mysqlPrismaService.movie.findUniqueOrThrow({
      where: { movieCd: movieId },
    });

    const reply = await this.mysqlPrismaService.comment.create({
      data: {
        userno: userId,
        comment: comment,
        movieId: movieId,
      },
    });

    const replyObject: Reply = {
      replyId: reply.id,
      comment: reply.comment,
      createdAt: reply.createdAt.toISOString(),
      updatedAt: reply.updatedAt.toISOString(),
      email: userData.email,
      nickname: userData.nickname,
      userId: userData.id,
    };
    return replyObject;
  }

  async update(updateReplyDto: UpdateReplyDto): Promise<Reply> {
    const { commentId, comment } = updateReplyDto;
    const reply = await this.mysqlPrismaService.comment.update({
      where: { id: commentId },
      data: { comment: comment },
    });
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id: reply.userno },
    });
    if (!userData) {
      throw new NotFoundException('해당하는 유저가 존재하지 않습니다.');
    }
    const createdAt = this.utilsService.dateToTimestamp(
      reply.createdAt as Date,
    );
    const updatedAt = this.utilsService.dateToTimestamp(
      reply.updatedAt as Date,
    );

    const replyObject: Reply = {
      replyId: reply.id,
      comment: reply.comment,
      createdAt: createdAt,
      updatedAt: updatedAt,
      email: userData.email,
      nickname: userData.nickname,
      userId: userData.id,
    };
    return replyObject;
  }

  async delete(deleteReplyDto: { commentId: number }): Promise<Reply> {
    const { commentId } = deleteReplyDto;
    const reply = await this.mysqlPrismaService.comment.update({
      where: { id: commentId },
      data: { deletedAt: new Date() },
    });
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id: reply.userno },
    });
    if (!userData) {
      throw new NotFoundException('해당하는 유저가 존재하지 않습니다.');
    }

    const replyObject: Reply = {
      replyId: reply.id,
      comment: reply.comment,
      createdAt: reply.createdAt.toISOString(),
      updatedAt: reply.updatedAt.toISOString(),
      email: userData.email,
      nickname: userData.nickname,
      userId: userData.id,
    };
    return replyObject;
  }

  async getReplies(getRepliesDto: {
    movieId: number;
    page: number;
  }): Promise<Replys> {
    const { movieId, page } = getRepliesDto;
    const replies = await this.mysqlPrismaService.comment.findMany({
      where: { movieId: movieId, deletedAt: null },
      include: { User: true },
      skip: (page - 1) * 10,
      take: 10,
    });
    const replyObjects: Reply[] = [];
    for (const reply of replies) {
      const replyObject: Reply = {
        replyId: reply.id,
        comment: reply.comment,
        email: reply.User.email,
        nickname: reply.User.nickname,
        userId: reply.User.id,
        createdAt: reply.createdAt.toISOString(),
        updatedAt: reply.updatedAt.toISOString(),
      };
      replyObjects.push(replyObject);
    }
    return { replys: replyObjects };
  }
}
