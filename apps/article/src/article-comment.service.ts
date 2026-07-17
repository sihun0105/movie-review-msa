import {
  ArticleComment,
  CreateCommentRequest,
  DeleteCommentRequest,
  GetCommentRequest,
  ListCommentsRequest,
  ListCommentsResponse,
  UpdateCommentRequest,
  ReactCommentRequest,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'prisma/generated/mysql';
import { ArticleCommentReactionService } from './article-comment-reaction.service';
import { mapArticleComment } from './article-comment.mapper';

@Injectable()
export class ArticleCommentService {
  private readonly reactionService: ArticleCommentReactionService;

  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {
    this.reactionService = new ArticleCommentReactionService(prisma);
  }

  async createComment(request: CreateCommentRequest): Promise<ArticleComment> {
    const { articleId, userno, content, parentId } = request;
    if (parentId) {
      const parent = await this.prisma.articleComments.findUnique({
        where: { id: parentId },
      });
      if (
        !parent ||
        parent.deletedAt ||
        parent.articleId !== articleId ||
        parent.parentId
      ) {
        throw new NotFoundException('Parent comment not found');
      }
    }
    const comment = await this.prisma.articleComments.create({
      data: {
        articleId,
        userno,
        content,
        parentId: parentId || null,
      } as Prisma.articleCommentsUncheckedCreateInput,
    });
    const article = await this.prisma.article.update({
      where: { id: articleId },
      data: { comment_count: { increment: 1 } },
    });
    if (!article) throw new NotFoundException('Article not found');

    const user = await this.prisma.user.findUnique({ where: { id: userno } });
    if (!user) throw new NotFoundException('User not found');

    return mapArticleComment({ ...comment, User: user }, this.utilsService);
  }

  async getComment(request: GetCommentRequest): Promise<ArticleComment> {
    const comment = await this.prisma.articleComments.findUnique({
      where: { id: request.id },
      include: { User: true },
    });
    if (!comment) throw new NotFoundException('Comment not found');
    return mapArticleComment(comment, this.utilsService);
  }

  async updateComment(request: UpdateCommentRequest): Promise<ArticleComment> {
    const { id, userno, content } = request;
    const existing = await this.prisma.articleComments.findUnique({
      where: { id, userno, deletedAt: null },
    });
    if (!existing) {
      throw new NotFoundException(
        'Comment not found or you do not have permission to update it',
      );
    }
    const comment = await this.prisma.articleComments.update({
      where: { id, userno },
      data: { content, isEdited: true },
    });
    const user = await this.prisma.user.findUnique({ where: { id: userno } });
    if (!user) throw new NotFoundException('User not found');

    return mapArticleComment({ ...comment, User: user }, this.utilsService);
  }

  async deleteComment(request: DeleteCommentRequest): Promise<void> {
    const { id, userno } = request;
    const comment = await this.prisma.articleComments.findUnique({
      where: { id, userno },
    });
    if (!comment || comment.deletedAt) {
      throw new NotFoundException(
        'Comment not found or you do not have permission to delete it',
      );
    }

    await this.prisma.article.update({
      where: { id: comment.articleId },
      data: { comment_count: { decrement: 1 } },
    });
    await this.prisma.articleComments.update({
      where: { id, userno },
      data: { deletedAt: new Date() },
    });
  }

  async listComments(
    request: ListCommentsRequest,
  ): Promise<ListCommentsResponse> {
    const { articleId, page, pageSize, userno } = request;
    const where = {
      articleId,
      parentId: null,
      OR: [{ deletedAt: null }, { replies: { some: { deletedAt: null } } }],
    };
    const comments = await this.prisma.articleComments.findMany({
      where,
      include: {
        User: true,
        reactions: true,
        replies: {
          where: { deletedAt: null },
          include: { User: true, reactions: true },
          orderBy: { createdAt: 'asc' },
        },
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    });
    const [rootCount, totalCount] = await Promise.all([
      this.prisma.articleComments.count({ where }),
      this.prisma.articleComments.count({
        where: { articleId, deletedAt: null },
      }),
    ]);

    return {
      comments: comments.map((comment) =>
        mapArticleComment(comment, this.utilsService, userno),
      ),
      totalCount,
      hasNext: rootCount > page * pageSize,
    };
  }

  reactComment(request: ReactCommentRequest) {
    return this.reactionService.react(request);
  }
}
