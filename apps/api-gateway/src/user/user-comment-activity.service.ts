import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { ActivityPagination, UserActivityPage } from './user-activity.types';

type MovieCommentRow = {
  id: number;
  movieId: number;
  comment: string | null;
  createdAt: Date;
  Movie: { title: string | null };
};

type ArticleCommentRow = {
  id: number;
  articleId: number;
  content: string;
  createdAt: Date;
  article: { title: string };
};

type CommentActivityDelegate<Row> = {
  count(args: unknown): Promise<number>;
  findMany(args: unknown): Promise<Row[]>;
};

@Injectable()
export class UserCommentActivityService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  private get movieComments(): CommentActivityDelegate<MovieCommentRow> {
    return this.prisma
      .comment as unknown as CommentActivityDelegate<MovieCommentRow>;
  }

  private get articleComments(): CommentActivityDelegate<ArticleCommentRow> {
    return this.prisma
      .articleComments as unknown as CommentActivityDelegate<ArticleCommentRow>;
  }

  async getCount(userId: number): Promise<number> {
    const [movieCount, articleCount] = await Promise.all([
      this.movieComments.count({ where: { userno: userId, deletedAt: null } }),
      this.articleComments.count({
        where: {
          userno: userId,
          deletedAt: null,
          article: { deletedAt: null },
        },
      }),
    ]);
    return movieCount + articleCount;
  }

  async getPage(
    userId: number,
    pagination: ActivityPagination,
  ): Promise<UserActivityPage> {
    const take = pagination.skip + pagination.take;
    const articleWhere = {
      userno: userId,
      deletedAt: null,
      article: { deletedAt: null },
    };
    const [movies, articles, movieCount, articleCount] = await Promise.all([
      this.movieComments.findMany({
        where: { userno: userId, deletedAt: null },
        take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          movieId: true,
          comment: true,
          createdAt: true,
          Movie: { select: { title: true } },
        },
      }),
      this.articleComments.findMany({
        where: articleWhere,
        take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          articleId: true,
          content: true,
          createdAt: true,
          article: { select: { title: true } },
        },
      }),
      this.movieComments.count({
        where: { userno: userId, deletedAt: null },
      }),
      this.articleComments.count({ where: articleWhere }),
    ]);
    const totalCount = movieCount + articleCount;
    const items: UserActivityPage['items'] = [
      ...movies.map((row) => ({
        type: 'comment' as const,
        id: row.id,
        targetType: 'movie' as const,
        targetId: row.movieId,
        targetTitle: row.Movie.title ?? '제목 없음',
        content: row.comment ?? '',
        createdAt: row.createdAt,
      })),
      ...articles.map((row) => ({
        type: 'comment' as const,
        id: row.id,
        targetType: 'article' as const,
        targetId: row.articleId,
        targetTitle: row.article.title,
        content: row.content,
        createdAt: row.createdAt,
      })),
    ]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(pagination.skip, pagination.skip + pagination.take);
    return {
      items,
      totalCount,
      hasNext: pagination.skip + items.length < totalCount,
    };
  }
}
