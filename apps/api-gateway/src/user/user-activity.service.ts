import { MySQLPrismaService } from '@app/prisma';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ActivityPagination,
  UserActivityPage,
  UserActivityType,
} from './user-activity.types';

@Injectable()
export class UserActivityService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getSummary(userId: number) {
    await this.assertActiveUser(userId);

    const [articleCommentCount, movieRatingCount, articleCount, likes] =
      await Promise.all([
        this.prisma.articleComments.count({
          where: {
            userno: userId,
            deletedAt: null,
            article: { deletedAt: null },
          },
        }),
        this.prisma.movieScore.count({
          where: { Userno: userId, deletedAt: null },
        }),
        this.prisma.article.count({
          where: { userno: userId, deletedAt: null },
        }),
        this.prisma.article.aggregate({
          where: { userno: userId, deletedAt: null },
          _sum: { like_count: true },
        }),
      ]);

    return {
      articleCommentCount,
      movieRatingCount,
      articleCount,
      receivedLikeCount: likes._sum.like_count ?? 0,
    };
  }

  async getActivity(
    userId: number,
    type: UserActivityType,
    page: number,
    pageSize: number,
  ): Promise<UserActivityPage> {
    await this.assertActiveUser(userId);
    const pagination = {
      skip: (Math.max(page, 1) - 1) * Math.min(Math.max(pageSize, 1), 20),
      take: Math.min(Math.max(pageSize, 1), 20),
    };
    if (type === 'comments') return this.getComments(userId, pagination);
    if (type === 'ratings') return this.getRatings(userId, pagination);
    if (type === 'articles' || type === 'likes') {
      return this.getArticles(userId, type, pagination);
    }
    throw new BadRequestException('지원하지 않는 활동 유형입니다.');
  }

  async deleteRating(userId: number, movieCd: number) {
    await this.assertActiveUser(userId);
    const result = await this.prisma.movieScore.updateMany({
      where: { Userno: userId, movieCd, deletedAt: null },
      data: { deletedAt: new Date() },
    });
    if (result.count === 0)
      throw new NotFoundException('평점을 찾지 못했습니다.');
    return { success: true };
  }

  private async getComments(
    userId: number,
    pagination: ActivityPagination,
  ): Promise<UserActivityPage> {
    const where = {
      userno: userId,
      deletedAt: null,
      article: { deletedAt: null },
    };
    const [rows, totalCount] = await Promise.all([
      this.prisma.articleComments.findMany({
        where,
        ...pagination,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          articleId: true,
          content: true,
          createdAt: true,
          article: { select: { title: true } },
        },
      }),
      this.prisma.articleComments.count({ where }),
    ]);
    const items = rows.map((row) => ({
      type: 'comment' as const,
      id: row.id,
      articleId: row.articleId,
      articleTitle: row.article.title,
      content: row.content,
      createdAt: row.createdAt,
    }));
    return this.toPage(items, totalCount, pagination);
  }

  private async getRatings(
    userId: number,
    pagination: ActivityPagination,
  ): Promise<UserActivityPage> {
    const where = { Userno: userId, deletedAt: null };
    const [rows, totalCount] = await Promise.all([
      this.prisma.movieScore.findMany({
        where,
        ...pagination,
        orderBy: { updatedAt: 'desc' },
        select: {
          movieCd: true,
          score: true,
          updatedAt: true,
          Movie: { select: { title: true, poster: true } },
        },
      }),
      this.prisma.movieScore.count({ where }),
    ]);
    const items = rows.map((row) => ({
      type: 'rating' as const,
      movieCd: row.movieCd,
      movieTitle: row.Movie.title ?? '제목 없음',
      poster: row.Movie.poster ?? '',
      score: row.score ?? 0,
      ratedAt: row.updatedAt,
    }));
    return this.toPage(items, totalCount, pagination);
  }

  private async getArticles(
    userId: number,
    type: 'articles' | 'likes',
    pagination: ActivityPagination,
  ): Promise<UserActivityPage> {
    const where = {
      userno: userId,
      deletedAt: null,
      ...(type === 'likes' ? { like_count: { gt: 0 } } : {}),
    };
    const [rows, totalCount] = await Promise.all([
      this.prisma.article.findMany({
        where,
        ...pagination,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          createdAt: true,
          like_count: true,
          comment_count: true,
        },
      }),
      this.prisma.article.count({ where }),
    ]);
    const items = rows.map((row) => ({
      type: type === 'likes' ? ('like' as const) : ('article' as const),
      articleId: row.id,
      title: row.title,
      createdAt: row.createdAt,
      likeCount: row.like_count,
      commentCount: row.comment_count,
    }));
    return this.toPage(items, totalCount, pagination);
  }

  private toPage(
    items: UserActivityPage['items'],
    totalCount: number,
    pagination: ActivityPagination,
  ): UserActivityPage {
    return {
      items,
      totalCount,
      hasNext: pagination.skip + items.length < totalCount,
    };
  }

  private async assertActiveUser(userId: number) {
    const count = await this.prisma.user.count({
      where: { id: userId, deletedAt: null },
    });
    if (count === 0) throw new UnauthorizedException('로그인이 필요합니다.');
  }
}
