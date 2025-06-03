import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
