import { GetReplyDto, Reply } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { Logger } from '@nestjs/common';
import { toReply } from './reply.mapper';

export class ReplyQueryService {
  private readonly logger = new Logger(ReplyQueryService.name);
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getReplies(
    dto: GetReplyDto,
  ): Promise<{ replies: Reply[]; hasNext: boolean }> {
    const { movieId, page, userId } = dto;
    const take = 10;
    const skip = (page - 1) * take;
    const where = {
      movieId,
      parentId: null,
      OR: [{ deletedAt: null }, { replies: { some: { deletedAt: null } } }],
    };
    const reactionSelect = { userno: true, type: true } as const;
    const [replies, totalCount] = await Promise.all([
      this.prisma.comment.findMany({
        where,
        include: {
          User: true,
          reactions: { select: reactionSelect },
          replies: {
            where: { deletedAt: null },
            include: {
              User: true,
              reactions: { select: reactionSelect },
            },
            orderBy: { createdAt: 'asc' },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      this.prisma.comment.count({ where }),
    ]);
    const authorIds = [...new Set(replies.flatMap((reply) => [
      reply.User.id, ...reply.replies.map((child) => child.User.id),
    ]))];
    const scores = authorIds.length ? await this.prisma.movieScore.findMany({
      where: { movieCd: movieId, Userno: { in: authorIds }, deletedAt: null },
      select: { Userno: true, score: true },
    }) : [];
    const ratings = new Map<number, number>();
    for (const row of scores) {
      if (row.Userno !== null && row.score !== null) ratings.set(row.Userno, row.score);
    }
    this.logger.debug(`getReplies movieId=${movieId} count=${replies.length}`);
    return {
      replies: replies.map((reply) => toReply(reply, userId, ratings)),
      hasNext: skip + take < totalCount,
    };
  }
}
