import { assertNever } from '@app/common/entity';
import {
  ArticleComment,
  ArticleLike,
  CreateArticleRequest,
  CreateArticleResponse,
  CreateCommentRequest,
  DeleteArticleRequest,
  DeleteCommentRequest,
  GetArticleLikeStatsRequest,
  GetArticleLikeStatsResponse,
  GetCommentRequest,
  LikeArticleRequest,
  LikeType,
  ListArticlesRequest,
  ListArticlesResponse,
  ListCommentsRequest,
  ListCommentsResponse,
  UpdateArticleRequest,
  UpdateCommentRequest,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/mysql';
import { GetArticleRequest } from 'proto/article';

@Injectable()
export class ArticleService {
  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}
  async createArticle(
    request: CreateArticleRequest,
  ): Promise<CreateArticleResponse> {
    const { title, content, userno } = request;
    const article = await this.mysqlPrismaService.article.create({
      data: {
        title,
        content,
        userno,
      },
      include: {
        User: true,
      },
    });
    return {
      article: {
        id: article.id,
        userno: article.userno,
        title: article.title,
        author: article.User.nickname,
        content: article.content,
        likeCount: article.like_count,
        dislikeCount: article.dislike_count,
        commentCount: article.comment_count,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        deletedAt: article.deletedAt?.toISOString() ?? null,
      },
    };
  }

  async getArticle(request: GetArticleRequest): Promise<CreateArticleResponse> {
    const { id } = request;
    const article = await this.mysqlPrismaService.article.findUnique({
      where: { id },
      include: {
        User: true,
      },
    });
    if (!article) {
      throw new Error('Article not found');
    }
    return {
      article: {
        id: article.id,
        userno: article.userno,
        title: article.title,
        author: article.User.nickname,
        content: article.content,
        likeCount: article.like_count,
        dislikeCount: article.dislike_count,
        commentCount: article.comment_count,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        deletedAt: article.deletedAt?.toISOString() ?? null,
      },
    };
  }

  async listArticles(
    request: ListArticlesRequest,
  ): Promise<ListArticlesResponse> {
    const { page, pageSize } = request;
    const articles = await this.mysqlPrismaService.article.findMany({
      where: { deletedAt: null },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        User: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    const totalCount = await this.mysqlPrismaService.article.count({
      where: { deletedAt: null },
    });
    const hasNext = totalCount > page * pageSize;

    return {
      articles: articles.map((article) => ({
        id: article.id,
        userno: article.userno,
        author: article.User.nickname,
        title: article.title,
        content: article.content,
        likeCount: article.like_count,
        dislikeCount: article.dislike_count,
        commentCount: article.comment_count,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        deletedAt: article.deletedAt?.toISOString() ?? null,
      })),
      hasNext,
    };
  }

  async updateArticle(
    request: UpdateArticleRequest,
  ): Promise<CreateArticleResponse> {
    const { id, userno, title, content } = request;
    const article = await this.mysqlPrismaService.article.update({
      where: { id },
      data: {
        userno,
        title,
        content,
      },
      include: {
        User: true,
      },
    });
    return {
      article: {
        id: article.id,
        author: article.User.nickname,
        userno: article.userno,
        title: article.title,
        content: article.content,
        likeCount: article.like_count,
        dislikeCount: article.dislike_count,
        commentCount: article.comment_count,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        deletedAt: article.deletedAt?.toISOString() ?? null,
      },
    };
  }
  async deleteArticle(request: DeleteArticleRequest): Promise<void> {
    const { id, userno } = request;
    console.log('Deleting article with ID:', id, 'for user:', userno);

    // soft delete
    await this.mysqlPrismaService.article.update({
      where: { id, userno },
      data: { deletedAt: new Date() },
    });
  }
  async createComment(request: CreateCommentRequest): Promise<ArticleComment> {
    const { articleId, userno, content } = request;
    const comment = await this.mysqlPrismaService.articleComments.create({
      data: {
        articleId,
        userno: userno,
        content,
      } as Prisma.articleCommentsUncheckedCreateInput,
    });
    const article = await this.mysqlPrismaService.article.update({
      where: { id: articleId },
      data: {
        comment_count: {
          increment: 1,
        },
      },
    });
    if (!article) {
      throw new Error('Article not found');
    }
    const user = await this.mysqlPrismaService.user.findUnique({
      where: { id: userno },
    });
    if (!user) {
      throw new Error('User not found');
    }

    // Return the comment object
    return {
      id: comment.id,
      articleId: comment.articleId,
      userno: comment.userno,
      content: comment.content,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
      deletedAt: comment.deletedAt?.toISOString() ?? null,
      nickname: user.nickname,
      avatar: user.image,
    };
  }

  async getComment(request: GetCommentRequest): Promise<ArticleComment> {
    const { id } = request;
    const comment = await this.mysqlPrismaService.articleComments.findUnique({
      where: { id },
      include: { User: true },
    });
    if (!comment) {
      throw new Error('Comment not found');
    }
    return {
      id: comment.id,
      articleId: comment.articleId,
      userno: comment.userno,
      content: comment.content,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
      deletedAt: comment.deletedAt?.toISOString() ?? null,
      nickname: comment.User.nickname,
      avatar: comment.User.image,
    };
  }

  async updateComment(request: UpdateCommentRequest): Promise<ArticleComment> {
    const { id, userno, content } = request;
    const comment = await this.mysqlPrismaService.articleComments.update({
      where: { id, userno },
      data: { content },
    });
    if (!comment) {
      throw new Error(
        'Comment not found or you do not have permission to update it',
      );
    }
    const user = await this.mysqlPrismaService.user.findUnique({
      where: { id: userno },
    });
    if (!user) {
      throw new Error('User not found');
    }

    // Return the updated comment object
    return {
      id: comment.id,
      articleId: comment.articleId,
      userno: comment.userno,
      content: comment.content,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
      deletedAt: comment.deletedAt?.toISOString() ?? null,
      nickname: user.nickname,
      avatar: user.image,
    };
  }

  async deleteComment(request: DeleteCommentRequest): Promise<void> {
    const { id, userno } = request;
    await this.mysqlPrismaService.articleComments.delete({
      where: { id, userno },
    });
  }
  async listComments(
    request: ListCommentsRequest,
  ): Promise<ListCommentsResponse> {
    const { articleId, page, pageSize } = request;
    const comments = await this.mysqlPrismaService.articleComments.findMany({
      where: { articleId },
      include: { User: true },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    });
    const totalCount = await this.mysqlPrismaService.articleComments.count({
      where: { articleId },
    });
    const hasNext = totalCount > page * pageSize;

    return {
      comments: comments.map((comment) => ({
        id: comment.id,
        articleId: comment.articleId,
        userno: comment.userno,
        content: comment.content,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: comment.updatedAt.toISOString(),
        deletedAt: comment.deletedAt?.toISOString() ?? null,
        nickname: comment.User.nickname,
        avatar: comment.User.image,
      })),
      hasNext,
    };
  }

  async likeArticle(request: LikeArticleRequest): Promise<ArticleLike> {
    const { articleId, userno, type } = request;

    let likedata: 'like' | 'dislike';

    switch (type) {
      case LikeType.UNRECOGNIZED:
        throw new Error('Invalid like type');
      case LikeType.LIKE:
        likedata = 'like';
        break;
      case LikeType.DISLIKE:
        likedata = 'dislike';
        break;
      default:
        assertNever(type);
    }
    const existingLike = await this.mysqlPrismaService.articleLikes.findFirst({
      where: {
        article_id: articleId,
        userno,
        type: likedata,
      },
    });
    if (existingLike) {
      // 좋아요/싫어요 취소: 레코드 삭제 및 카운트 감소
      await this.mysqlPrismaService.articleLikes.delete({
        where: {
          id: existingLike.id,
        },
      });
      if (likedata === 'like') {
        await this.mysqlPrismaService.article.update({
          where: { id: articleId },
          data: {
            like_count: {
              decrement: 1,
            },
          },
        });
      } else {
        await this.mysqlPrismaService.article.update({
          where: { id: articleId },
          data: {
            dislike_count: {
              decrement: 1,
            },
          },
        });
      }
      return {
        id: existingLike.id,
        articleId: existingLike.article_id,
        userno: existingLike.userno,
        type: existingLike.type === 'like' ? LikeType.LIKE : LikeType.DISLIKE,
        createdAt: existingLike.createdAt.toISOString(),
      };
    }

    const like = await this.mysqlPrismaService.articleLikes.create({
      data: {
        article_id: articleId,
        userno,
        type: likedata,
      } as Prisma.articleLikesUncheckedCreateInput,
    });
    if (likedata === 'like') {
      await this.mysqlPrismaService.article.update({
        where: { id: articleId },
        data: {
          like_count: {
            increment: 1,
          },
        },
      });
    } else {
      await this.mysqlPrismaService.article.update({
        where: { id: articleId },
        data: {
          dislike_count: {
            increment: 1,
          },
        },
      });
    }

    const liketype = like.type === 'like' ? LikeType.LIKE : LikeType.DISLIKE;
    return {
      id: like.id,
      articleId: like.article_id,
      userno: like.userno,
      type: liketype,
      createdAt: like.createdAt.toISOString(),
    };
  }

  async getArticleLikeStats(
    request: GetArticleLikeStatsRequest,
  ): Promise<GetArticleLikeStatsResponse> {
    const { articleId, userno } = request;
    const hasLike = await this.mysqlPrismaService.articleLikes.count({
      where: {
        article_id: articleId,
        type: 'like',
        userno: userno,
      },
    });
    const hasDislike = await this.mysqlPrismaService.articleLikes.count({
      where: {
        article_id: articleId,
        type: 'dislike',
        userno: userno,
      },
    });
    return {
      userno: userno,
      articleId: articleId,
      hasLiked: hasLike > 0 ? true : false,
      hasDisliked: hasDislike > 0 ? true : false,
    };
  }
}
