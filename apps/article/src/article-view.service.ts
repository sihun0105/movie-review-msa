import {
  RecordArticleViewRequest,
  RecordArticleViewResponse,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable, NotFoundException } from '@nestjs/common';

export const toKstDate = (date: Date): Date => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const value = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  );
  return new Date(`${value.year}-${value.month}-${value.day}T00:00:00.000Z`);
};

@Injectable()
export class ArticleViewService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async recordView(
    request: RecordArticleViewRequest,
    now = new Date(),
  ): Promise<RecordArticleViewResponse> {
    const article = await this.prisma.article.findFirst({
      where: { id: request.articleId, deletedAt: null },
      select: { id: true, view_count: true },
    });
    if (!article) throw new NotFoundException('Article not found');

    return this.prisma.$transaction(async (tx) => {
      const created = await tx.articleView.createMany({
        data: {
          articleId: request.articleId,
          viewerKey: request.viewerKey,
          viewedOn: toKstDate(now),
        },
        skipDuplicates: true,
      });
      if (created.count === 0) {
        const current = await tx.article.findUniqueOrThrow({
          where: { id: request.articleId },
          select: { view_count: true },
        });
        return { viewCount: current.view_count, counted: false };
      }
      const updated = await tx.article.update({
        where: { id: request.articleId },
        data: { view_count: { increment: 1 } },
        select: { view_count: true },
      });
      return { viewCount: updated.view_count, counted: true };
    });
  }
}
