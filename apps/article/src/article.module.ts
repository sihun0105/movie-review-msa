import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleCrudService } from './article-crud.service';
import { ArticleCommentService } from './article-comment.service';
import { ArticleLikeService } from './article-like.service';
import { ArticleViewService } from './article-view.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [ArticleController],
  providers: [
    ArticleService,
    ArticleCrudService,
    ArticleCommentService,
    ArticleLikeService,
    ArticleViewService,
  ],
})
export class ArticleModule {}
