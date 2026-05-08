import { assertNever } from '@app/common/entity';
import {
  ArticleLike,
  GetArticleLikeStatsRequest,
  GetArticleLikeStatsResponse,
  LikeArticleRequest,
  LikeType,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/mysql';

@Injectable()
export class ArticleLikeService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async likeArticle(request: LikeArticleRequest): Promise<ArticleLike> {
    const { articleId, userno, type } = request;
    const likedata = this.toLikeKind(type);

    const existingLike = await this.prisma.articleLikes.findFirst({
      where: { article_id: articleId, userno, type: likedata },
    });

    if (existingLike) {
      await this.prisma.articleLikes.delete({ where: { id: existingLike.id } });
      await this.adjustCount(articleId, likedata, -1);
      return this.formatLike(existingLike);
    }

    const like = await this.prisma.articleLikes.create({
      data: { article_id: articleId, userno, type: likedata } as Prisma.articleLikesUncheckedCreateInput,
    });
    await this.adjustCount(articleId, likedata, 1);
    return this.formatLike(like);
  }

  async getArticleLikeStats(
    request: GetArticleLikeStatsRequest,
  ): Promise<GetArticleLikeStatsResponse> {
    const { articleId, userno } = request;
    const [hasLike, hasDislike] = await Promise.all([
      this.prisma.articleLikes.count({
        where: { article_id: articleId, type: 'like', userno },
      }),
      this.prisma.articleLikes.count({
        where: { article_id: articleId, type: 'dislike', userno },
      }),
    ]);
    return {
      userno,
      articleId,
      hasLiked: hasLike > 0,
      hasDisliked: hasDislike > 0,
    };
  }

  private toLikeKind(type: LikeType): 'like' | 'dislike' {
    switch (type) {
      case LikeType.UNRECOGNIZED:
        throw new BadRequestException('Invalid like type');
      case LikeType.LIKE:
        return 'like';
      case LikeType.DISLIKE:
        return 'dislike';
      default:
        assertNever(type);
    }
  }

  private async adjustCount(
    articleId: number,
    likedata: 'like' | 'dislike',
    delta: 1 | -1,
  ) {
    const op = delta === 1 ? 'increment' : 'decrement';
    if (likedata === 'like') {
      await this.prisma.article.update({
        where: { id: articleId },
        data: { like_count: { [op]: 1 } },
      });
    } else {
      await this.prisma.article.update({
        where: { id: articleId },
        data: { dislike_count: { [op]: 1 } },
      });
    }
  }

  private formatLike(like: any): ArticleLike {
    return {
      id: like.id,
      articleId: like.article_id,
      userno: like.userno,
      type: like.type === 'like' ? LikeType.LIKE : LikeType.DISLIKE,
      createdAt: like.createdAt.toISOString(),
    };
  }
}
