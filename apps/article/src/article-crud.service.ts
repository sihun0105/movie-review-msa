import {
  CreateArticleRequest,
  CreateArticleResponse,
  DeleteArticleRequest,
  ListArticlesRequest,
  ListArticlesResponse,
  UpdateArticleRequest,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import {
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { GetArticleRequest } from 'proto/article';

@Injectable()
export class ArticleCrudService {
  private readonly logger = new Logger(ArticleCrudService.name);
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  private formatArticle(article: any) {
    return {
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
      deletedAt: this.utilsService.toNullableISOString(article.deletedAt),
    };
  }

  async createArticle(
    request: CreateArticleRequest,
  ): Promise<CreateArticleResponse> {
    const { title, content, userno } = request;
    const article = await this.prisma.article.create({
      data: { title, content, userno },
      include: { User: true },
    });
    return { article: this.formatArticle(article) };
  }

  async getArticle(request: GetArticleRequest): Promise<CreateArticleResponse> {
    const article = await this.prisma.article.findUnique({
      where: { id: request.id },
      include: { User: true },
    });
    if (!article) throw new NotFoundException('Article not found');
    return { article: this.formatArticle(article) };
  }

  async listArticles(
    request: ListArticlesRequest,
  ): Promise<ListArticlesResponse> {
    const { page, pageSize } = request;
    const articles = await this.prisma.article.findMany({
      where: { deletedAt: null },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: { User: true },
      orderBy: { createdAt: 'desc' },
    });
    const totalCount = await this.prisma.article.count({
      where: { deletedAt: null },
    });
    return {
      articles: articles.map((a) => this.formatArticle(a)),
      hasNext: totalCount > page * pageSize,
    };
  }

  async updateArticle(
    request: UpdateArticleRequest,
  ): Promise<CreateArticleResponse> {
    const { id, userno, title, content } = request;

    const existing = await this.prisma.article.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Article not found');
    if (existing.userno !== userno) {
      throw new ForbiddenException('You can only update your own articles');
    }

    const article = await this.prisma.article.update({
      where: { id },
      data: { title, content, updatedAt: new Date() },
      include: { User: true },
    });
    return { article: this.formatArticle(article) };
  }

  async deleteArticle(request: DeleteArticleRequest): Promise<void> {
    const { id, userno } = request;
    this.logger.log(`deleteArticle id=${id} userId=${userno}`);

    const existing = await this.prisma.article.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Article not found');
    if (existing.userno !== userno) {
      throw new ForbiddenException('You can only delete your own articles');
    }

    await this.prisma.article.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
