import {
  Controller,
  Body,
  Param,
  Query,
  Post,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import {
  ArticleServiceController,
  ArticleServiceControllerMethods,
  CreateArticleRequest,
  CreateCommentRequest,
  LikeArticleRequest,
} from '@app/common/protobuf';
import { UpdateArticleRequest } from 'proto/article';

@Controller()
@ArticleServiceControllerMethods()
export class ArticleController implements ArticleServiceController {
  constructor(private readonly articleService: ArticleService) {}

  // Create article
  @Post()
  async createArticle(@Body() body: CreateArticleRequest) {
    return this.articleService.createArticle(body);
  }

  // Get single article
  @Get(':id')
  async getArticle(@Param('id') id: string) {
    return this.articleService.getArticle({ id: Number(id) });
  }

  // List articles (pagination)
  @Get()
  async listArticles(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.articleService.listArticles({
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
    });
  }

  // Update article
  @Patch(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body() body: Omit<UpdateArticleRequest, 'id'>,
  ) {
    return this.articleService.updateArticle({ id: Number(id), ...body });
  }

  // Delete article
  @Delete(':id')
  async deleteArticle(@Param('id') id: string, @Body('userno') userno: number) {
    return this.articleService.deleteArticle({ id: Number(id), userno });
  }

  // Create comment
  @Post(':articleId/comments')
  async createComment(
    @Param('articleId') articleId: string,
    @Body() body: Omit<CreateCommentRequest, 'articleId'>,
  ) {
    return this.articleService.createComment({
      articleId: Number(articleId),
      ...body,
    });
  }

  // List comments (pagination)
  @Get(':articleId/comments')
  async listComments(
    @Param('articleId') articleId: string,
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.articleService.listComments({
      articleId: Number(articleId),
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
    });
  }

  // Like or Dislike
  @Post(':articleId/like')
  async likeArticle(
    @Param('articleId') articleId: string,
    @Body() body: Omit<LikeArticleRequest, 'article_id'>,
  ) {
    return this.articleService.likeArticle({
      article_id: Number(articleId),
      ...body,
    });
  }

  // Get like stats
  @Get(':articleId/likes')
  async getLikeStats(@Param('articleId') articleId: string) {
    return this.articleService.getArticleLikeStats({
      article_id: Number(articleId),
    });
  }
}
