import { ReactReplyDto, ReplyReactionResult } from '@app/common/protobuf';
import {
  InvalidArguementException,
  NotFoundException,
} from '@app/common/filters/rpcexception/rpc-exception';
import { MySQLPrismaService } from '@app/prisma';

type Reaction = 'like' | 'dislike';

export class ReplyReactionService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async react(dto: ReactReplyDto): Promise<ReplyReactionResult> {
    const reaction = this.validateReaction(dto.reaction);
    const comment = await this.prisma.comment.findUnique({
      where: { id: dto.commentId },
    });
    if (!comment || comment.deletedAt) {
      throw new NotFoundException('댓글이 존재하지 않습니다.');
    }

    const existing = await this.prisma.commentReaction.findUnique({
      where: {
        commentId_userno: { commentId: dto.commentId, userno: dto.userId },
      },
    });
    let selected: Reaction | '' = reaction;
    if (!existing) {
      await this.prisma.commentReaction.create({
        data: { commentId: dto.commentId, userno: dto.userId, type: reaction },
      });
    } else if (existing.type === reaction) {
      await this.prisma.commentReaction.delete({ where: { id: existing.id } });
      selected = '';
    } else {
      await this.prisma.commentReaction.update({
        where: { id: existing.id },
        data: { type: reaction },
      });
    }

    const [likeCount, dislikeCount] = await Promise.all([
      this.count(dto.commentId, 'like'),
      this.count(dto.commentId, 'dislike'),
    ]);
    return { likeCount, dislikeCount, reaction: selected };
  }

  private count(commentId: number, type: Reaction) {
    return this.prisma.commentReaction.count({ where: { commentId, type } });
  }

  private validateReaction(value: string): Reaction {
    if (value !== 'like' && value !== 'dislike') {
      throw new InvalidArguementException('올바르지 않은 반응입니다.');
    }
    return value;
  }
}
