import {
  ArticleComment,
  CreateCommentRequest,
  DeleteCommentRequest,
  GetCommentRequest,
  ListCommentsRequest,
  ListCommentsResponse,
  UpdateCommentRequest,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'prisma/generated/mysql';

@Injectable()
export class ArticleCommentService {
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  private formatComment(comment: any, user: any): ArticleComment {
    return {
      id: comment.id,
      articleId: comment.articleId,
      userno: comment.userno,
      content: comment.content,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
      deletedAt: this.utilsService.toNullableISOString(comment.deletedAt),
      nickname: user.nickname,
      avatar: user.image,
    };
  }

  async createComment(request: CreateCommentRequest): Promise<ArticleComment> {
    const { articleId, userno, content } = request;
    const comment = await this.prisma.articleComments.create({
      data: { articleId, userno, content } as Prisma.articleCommentsUncheckedCreateInput,
    });
    const article = await this.prisma.article.update({
      where: { id: articleId },
      data: { comment_count: { increment: 1 } },
    });
    if (!article) throw new NotFoundException('Article not found');

    const user = await this.prisma.user.findUnique({ where: { id: userno } });
    if (!user) throw new NotFoundException('User not found');

    return this.formatComment(comment, user);
  }

  async getComment(request: GetCommentRequest): Promise<ArticleComment> {
    const comment = await this.prisma.articleComments.findUnique({
      where: { id: request.id },
      include: { User: true },
    });
    if (!comment) throw new NotFoundException('Comment not found');
    return this.formatComment(comment, comment.User);
  }

  async updateComment(request: UpdateCommentRequest): Promise<ArticleComment> {
    const { id, userno, content } = request;
    const comment = await this.prisma.articleComments.update({
      where: { id, userno },
      data: { content },
    });
    if (!comment) {
      throw new NotFoundException(
        'Comment not found or you do not have permission to update it',
      );
    }
    const user = await this.prisma.user.findUnique({ where: { id: userno } });
    if (!user) throw new NotFoundException('User not found');

    return this.formatComment(comment, user);
  }

  async deleteComment(request: DeleteCommentRequest): Promise<void> {
    const { id, userno } = request;
    const comment = await this.prisma.articleComments.findUnique({
      where: { id, userno },
    });
    if (!comment) {
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
    const { articleId, page, pageSize } = request;
    const comments = await this.prisma.articleComments.findMany({
      where: { articleId, deletedAt: null },
      include: { User: true },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    });
    const totalCount = await this.prisma.articleComments.count({
      where: { articleId, deletedAt: null },
    });

    return {
      comments: comments.map((c) => this.formatComment(c, c.User)),
      totalCount,
      hasNext: totalCount > page * pageSize,
    };
  }
}
