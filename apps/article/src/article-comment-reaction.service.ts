import {
  CommentReactionResponse,
  ReactCommentRequest,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { BadRequestException, NotFoundException } from '@nestjs/common';

type Reaction = 'like' | 'dislike';

export class ArticleCommentReactionService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async react(request: ReactCommentRequest): Promise<CommentReactionResponse> {
    const reaction = this.validate(request.reaction);
    const comment = await this.prisma.articleComments.findUnique({
      where: { id: request.id },
    });
    if (!comment || comment.deletedAt) {
      throw new NotFoundException('Comment not found');
    }

    const existing = await this.prisma.articleCommentReaction.findUnique({
      where: {
        commentId_userno: {
          commentId: request.id,
          userno: request.userno,
        },
      },
    });
    let selected: Reaction | '' = reaction;
    if (!existing) {
      await this.prisma.articleCommentReaction.create({
        data: { commentId: request.id, userno: request.userno, type: reaction },
      });
    } else if (existing.type === reaction) {
      await this.prisma.articleCommentReaction.delete({
        where: { id: existing.id },
      });
      selected = '';
    } else {
      await this.prisma.articleCommentReaction.update({
        where: { id: existing.id },
        data: { type: reaction },
      });
    }

    const [likeCount, dislikeCount] = await Promise.all([
      this.count(request.id, 'like'),
      this.count(request.id, 'dislike'),
    ]);
    return { likeCount, dislikeCount, reaction: selected };
  }

  private count(commentId: number, type: Reaction) {
    return this.prisma.articleCommentReaction.count({
      where: { commentId, type },
    });
  }

  private validate(value: string): Reaction {
    if (value !== 'like' && value !== 'dislike') {
      throw new BadRequestException('Invalid reaction');
    }
    return value;
  }
}
