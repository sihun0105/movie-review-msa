import {
  ArticleComment,
  ArticleLike,
  ArticleServiceController,
  ArticleServiceControllerMethods,
  CreateArticleRequest,
  CreateArticleResponse,
  CreateCommentRequest,
  DeleteArticleRequest,
  DeleteCommentRequest,
  GetArticleLikeStatsRequest,
  GetArticleLikeStatsResponse,
  GetArticleRequest,
  GetArticleResponse,
  GetCommentRequest,
  LikeArticleRequest,
  ListArticlesRequest,
  ListArticlesResponse,
  ListCommentsRequest,
  ListCommentsResponse,
  UpdateArticleRequest,
  UpdateCommentRequest,
} from '@app/common/protobuf';

import { Controller } from '@nestjs/common';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { ArticleService } from './article.service';

@Controller()
@ArticleServiceControllerMethods()
export class ArticleController implements ArticleServiceController {
  constructor(private readonly articleService: ArticleService) {}

  async createArticle(
    request: CreateArticleRequest,
  ): Promise<CreateArticleResponse> {
    return this.articleService.createArticle(request);
  }

  async getArticle(request: GetArticleRequest): Promise<GetArticleResponse> {
    return this.articleService.getArticle(request);
  }

  async listArticles(
    request: ListArticlesRequest,
  ): Promise<ListArticlesResponse> {
    return this.articleService.listArticles(request);
  }

  async updateArticle(
    request: UpdateArticleRequest,
  ): Promise<CreateArticleResponse> {
    return this.articleService.updateArticle(request);
  }

  async deleteArticle(request: DeleteArticleRequest): Promise<Empty> {
    return this.articleService.deleteArticle(request);
  }

  async createComment(request: CreateCommentRequest): Promise<ArticleComment> {
    return this.articleService.createComment(request);
  }

  async getComment(request: GetCommentRequest): Promise<ArticleComment> {
    return this.articleService.getComment(request);
  }

  async updateComment(request: UpdateCommentRequest): Promise<ArticleComment> {
    return this.articleService.updateComment(request);
  }

  async deleteComment(request: DeleteCommentRequest): Promise<Empty> {
    return this.articleService.deleteComment(request);
  }

  async listComments(
    request: ListCommentsRequest,
  ): Promise<ListCommentsResponse> {
    return this.articleService.listComments(request);
  }

  async likeArticle(request: LikeArticleRequest): Promise<ArticleLike> {
    return this.articleService.likeArticle(request);
  }

  async getArticleLikeStats(
    request: GetArticleLikeStatsRequest,
  ): Promise<GetArticleLikeStatsResponse> {
    return this.articleService.getArticleLikeStats(request);
  }
}
