import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import {
  CreateArticleRequest,
  CreateCommentRequest,
  LikeArticleRequest,
  UpdateArticleRequest,
} from '@app/common/protobuf';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageMemoryMulterOptions } from '../upload/image-multer.options';
import { UploadService } from '../upload/upload.service';
@Controller('article')
export class ArticleController {
  private readonly logger = new Logger(ArticleController.name);
  constructor(
    private readonly articleService: ArticleService,
    private readonly uploadService: UploadService,
  ) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async createArticle(@Body() body: CreateArticleRequest, @Req() req) {
    const userNumber = req.user.userId;
    body.userno = userNumber;
    return this.articleService.createArticle(body);
  }

  @Post('image')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('file', 1, imageMemoryMulterOptions))
  async uploadArticleImage(@UploadedFiles() files: Express.Multer.File[]) {
    const url = await this.uploadService.uploadImage({
      file: files?.[0],
      folder: 'articles',
    });
    return { url };
  }

  @Get(':id')
  async getArticle(@Param('id') id: string) {
    this.logger.debug(`getArticle id=${id}`);
    return this.articleService.getArticle({ id: Number(id) });
  }

  @Get()
  async listArticles(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
  ) {
    this.logger.debug(`listArticles page=${page} pageSize=${pageSize}`);
    return this.articleService.listArticles({
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
    });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateArticle(
    @Param('id') id: string,
    @Body() body: Omit<UpdateArticleRequest, 'id'>,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    body.userno = userNumber;
    return this.articleService.updateArticle({ id: Number(id), ...body });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteArticle(@Param('id') id: string, @Req() req) {
    const userNumber = req.user.userId;
    return this.articleService.deleteArticle({
      id: Number(id),
      userno: userNumber,
    });
  }

  @Post(':articleId/comments')
  @UseGuards(JwtAuthGuard)
  async createComment(
    @Param('articleId') articleId: string,
    @Body() body: Omit<CreateCommentRequest, 'articleId'>,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    body.userno = userNumber;
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
  @Patch('/comments/:commentId')
  @UseGuards(JwtAuthGuard)
  async updateComment(
    @Param('commentId') commentId: string,
    @Body() body: Omit<CreateCommentRequest, 'articleId'>,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    body.userno = userNumber;
    return this.articleService.updateComment({
      id: Number(commentId),
      userno: userNumber,
      ...body,
    });
  }
  @Delete('/comments/:commentId')
  @UseGuards(JwtAuthGuard)
  async deleteComment(@Param('commentId') commentId: string, @Req() req) {
    const userNumber = req.user.userId;
    return this.articleService.deleteComment({
      id: Number(commentId),
      userno: userNumber,
    });
  }
  @Post(':articleId/like')
  @UseGuards(JwtAuthGuard)
  async likeArticle(
    @Param('articleId') articleId: string,
    @Body() body: Omit<LikeArticleRequest, 'article_id'>,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    body.userno = userNumber;
    this.logger.debug(`likeArticle articleId=${articleId} type=${body.type}`);
    return this.articleService.likeArticle({
      articleId: Number(articleId),
      ...body,
    });
  }

  @Get(':articleId/likes')
  @UseGuards(JwtAuthGuard)
  async getLikeStats(@Param('articleId') articleId: string, @Req() req) {
    const userNumber = req.user.userId;
    return this.articleService.getArticleLikeStats({
      articleId: Number(articleId),
      userno: userNumber,
    });
  }
}
