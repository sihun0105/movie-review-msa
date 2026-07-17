import {
  CreateReplyDto,
  Reply,
  UpdateReplyDto,
  DeleteReplyDto,
} from '@app/common/protobuf';
import {
  InvalidArguementException,
  NotFoundException,
} from '@app/common/filters/rpcexception/rpc-exception';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable, Logger, ForbiddenException } from '@nestjs/common';
import { toReply } from './reply.mapper';

@Injectable()
export class ReplyService {
  private readonly logger = new Logger(ReplyService.name);
  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  async create(createReplyDto: CreateReplyDto): Promise<Reply> {
    const { comment, userId, movieId, parentId } = createReplyDto;
    const userData = await this.mysqlPrismaService.user.findUnique({
      where: { id: userId },
    });
    if (!userData) {
      throw new NotFoundException('해당하는 유저가 존재하지 않습니다.');
    }
    await this.mysqlPrismaService.movie.findUniqueOrThrow({
      where: { movieCd: movieId },
    });

    if (parentId) {
      const parent = await this.mysqlPrismaService.comment.findUnique({
        where: { id: parentId },
      });
      if (!parent || parent.deletedAt || parent.movieId !== movieId) {
        throw new NotFoundException('답글을 작성할 댓글이 존재하지 않습니다.');
      }
      if (parent.parentId) {
        throw new InvalidArguementException(
          '답글에는 다시 답글을 작성할 수 없습니다.',
        );
      }
    }

    const reply = await this.mysqlPrismaService.comment.create({
      data: {
        userno: userId,
        comment: comment,
        movieId: movieId,
        parentId,
      },
    });

    return toReply({ ...reply, User: userData, replies: [] });
  }

  async update(updateReplyDto: UpdateReplyDto): Promise<Reply> {
    const { commentId, comment, userId } = updateReplyDto;

    // 기존 댓글 조회 및 권한 확인
    const existingReply = await this.mysqlPrismaService.comment.findUnique({
      where: { id: commentId },
    });

    if (!existingReply) {
      throw new NotFoundException('댓글이 존재하지 않습니다.');
    }

    if (existingReply.userno !== userId) {
      throw new ForbiddenException('자신의 댓글만 수정할 수 있습니다.');
    }

    const reply = await this.mysqlPrismaService.comment.update({
      where: { id: commentId },
      data: { comment: comment, updatedAt: new Date() },
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
      avatar: userData.image,
      email: userData.email,
      nickname: userData.nickname,
      userId: userData.id,
      parentId: reply.parentId ?? undefined,
      replies: [],
    };
    return replyObject;
  }

  async delete(deleteReplyDto: DeleteReplyDto): Promise<Reply> {
    const { commentId, userId } = deleteReplyDto;

    // 기존 댓글 조회 및 권한 확인
    const existingReply = await this.mysqlPrismaService.comment.findUnique({
      where: { id: commentId },
    });

    if (!existingReply) {
      throw new NotFoundException('댓글이 존재하지 않습니다.');
    }

    if (existingReply.userno !== userId) {
      throw new ForbiddenException('자신의 댓글만 삭제할 수 있습니다.');
    }

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
      avatar: userData.image,
      email: userData.email,
      nickname: userData.nickname,
      userId: userData.id,
      parentId: reply.parentId ?? undefined,
      replies: [],
    };
    return replyObject;
  }

  async getReplies(getRepliesDto: {
    movieId: number;
    page: number;
  }): Promise<{ replies: Reply[]; hasNext: boolean }> {
    const { movieId, page } = getRepliesDto;
    const take = 10;
    const skip = (page - 1) * take;

    const [replies, totalCount] = await Promise.all([
      this.mysqlPrismaService.comment.findMany({
        where: { movieId, deletedAt: null, parentId: null },
        include: {
          User: true,
          replies: {
            where: { deletedAt: null },
            include: { User: true },
            orderBy: { createdAt: 'asc' },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      this.mysqlPrismaService.comment.count({
        where: { movieId, deletedAt: null, parentId: null },
      }),
    ]);
    this.logger.debug(`getReplies movieId=${movieId} count=${replies.length}`);
    const replyObjects: Reply[] = replies.map(toReply);

    const hasNext = skip + take < totalCount;

    return {
      replies: replyObjects,
      hasNext,
    };
  }
}
