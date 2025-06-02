import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import {
  CreateArticleRequest,
  CreateCommentRequest,
  LikeArticleRequest,
  UpdateArticleRequest,
} from '@app/common/protobuf';
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post()
  async createArticle(@Body() body: CreateArticleRequest) {
    return this.articleService.createArticle(body);
  }

  @Get(':id')
  async getArticle(@Param('id') id: string) {
    return this.articleService.getArticle({ id: Number(id) });
  }

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

  @Patch(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body() body: Omit<UpdateArticleRequest, 'id'>,
  ) {
    return this.articleService.updateArticle({ id: Number(id), ...body });
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: string, @Body('userno') userno: number) {
    return this.articleService.deleteArticle({ id: Number(id), userno });
  }

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

  @Get(':articleId/likes')
  async getLikeStats(@Param('articleId') articleId: string) {
    return this.articleService.getArticleLikeStats({
      article_id: Number(articleId),
    });
  }
}
