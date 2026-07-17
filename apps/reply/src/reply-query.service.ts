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
    this.logger.debug(`getReplies movieId=${movieId} count=${replies.length}`);
    return {
      replies: replies.map((reply) => toReply(reply, userId)),
      hasNext: skip + take < totalCount,
    };
  }
}
