import {
  ARTICLE_PACKAGE_NAME,
  ARTICLE_SERVICE_NAME,
  ArticleServiceClient,
  CreateArticleRequest,
  CreateCommentRequest,
  DeleteArticleRequest,
  DeleteCommentRequest,
  GetArticleLikeStatsRequest,
  GetArticleRequest,
  LikeArticleRequest,
  ListArticlesRequest,
  ListCommentsRequest,
  UpdateArticleRequest,
  UpdateCommentRequest,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ArticleService implements OnModuleInit {
  private articleService: ArticleServiceClient;
  constructor(
    @Inject(ARTICLE_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.articleService =
      this.client.getService<ArticleServiceClient>(ARTICLE_SERVICE_NAME);
  }

  async createArticle(request: CreateArticleRequest) {
    return this.articleService.createArticle(request);
  }

  async getArticle(request: GetArticleRequest) {
    return this.articleService.getArticle(request);
  }

  async listArticles(request: ListArticlesRequest) {
    return this.articleService.listArticles(request);
  }

  async updateArticle(request: UpdateArticleRequest) {
    return this.articleService.updateArticle(request);
  }

  async deleteArticle(request: DeleteArticleRequest) {
    return this.articleService.deleteArticle(request);
  }
  async createComment(request: CreateCommentRequest) {
    return this.articleService.createComment(request);
  }
  async updateComment(request: UpdateCommentRequest) {
    return this.articleService.updateComment(request);
  }
  async deleteComment(request: DeleteCommentRequest) {
    return this.articleService.deleteComment(request);
  }
  async listComments(request: ListCommentsRequest) {
    return this.articleService.listComments(request);
  }

  async likeArticle(request: LikeArticleRequest) {
    return this.articleService.likeArticle(request);
  }

  async getArticleLikeStats(request: GetArticleLikeStatsRequest) {
    return this.articleService.getArticleLikeStats(request);
  }
}
