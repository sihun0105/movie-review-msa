import {
  CreateReplyDto,
  DeleteReplyDto,
  Reply,
  UpdateReplyDto,
} from '@app/common/protobuf';
import {
  InvalidArguementException,
  NotFoundException,
} from '@app/common/filters/rpcexception/rpc-exception';
import { MySQLPrismaService } from '@app/prisma';
import { ForbiddenException } from '@nestjs/common';
import { toReply } from './reply.mapper';

export class ReplyCommandService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async create(dto: CreateReplyDto): Promise<Reply> {
    const { comment, userId, movieId, parentId } = dto;
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user)
      throw new NotFoundException('해당하는 유저가 존재하지 않습니다.');
    await this.prisma.movie.findUniqueOrThrow({ where: { movieCd: movieId } });

    if (parentId) {
      const parent = await this.prisma.comment.findUnique({
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

    const reply = await this.prisma.comment.create({
      data: { userno: userId, comment, movieId, parentId },
    });
    return toReply(
      { ...reply, User: user, reactions: [], replies: [] },
      userId,
    );
  }

  async update(dto: UpdateReplyDto): Promise<Reply> {
    const existing = await this.findOwned(dto.commentId, dto.userId);
    const reply = await this.prisma.comment.update({
      where: { id: dto.commentId },
      data: { comment: dto.comment, isEdited: true, updatedAt: new Date() },
    });
    const user = await this.findUser(existing.userno);
    return toReply(
      { ...reply, User: user, reactions: [], replies: [] },
      dto.userId,
    );
  }

  async delete(dto: DeleteReplyDto): Promise<Reply> {
    const existing = await this.findOwned(dto.commentId, dto.userId);
    const reply = await this.prisma.comment.update({
      where: { id: dto.commentId },
      data: { deletedAt: new Date() },
    });
    const user = await this.findUser(existing.userno);
    return toReply(
      { ...reply, User: user, reactions: [], replies: [] },
      dto.userId,
    );
  }

  private async findOwned(commentId: number, userId: number) {
    const reply = await this.prisma.comment.findUnique({
      where: { id: commentId },
    });
    if (!reply || reply.deletedAt)
      throw new NotFoundException('댓글이 존재하지 않습니다.');
    if (reply.userno !== userId) {
      throw new ForbiddenException('자신의 댓글만 변경할 수 있습니다.');
    }
    return reply;
  }

  private async findUser(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user)
      throw new NotFoundException('해당하는 유저가 존재하지 않습니다.');
    return user;
  }
}
