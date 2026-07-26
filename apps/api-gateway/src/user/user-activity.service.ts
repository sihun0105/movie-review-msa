import { MySQLPrismaService } from '@app/prisma';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserActivityService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getSummary(userId: number) {
    const activeUserCount = await this.prisma.user.count({
      where: { id: userId, deletedAt: null },
    });
    if (activeUserCount === 0) {
      throw new UnauthorizedException('로그인이 필요합니다.');
    }

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
}
