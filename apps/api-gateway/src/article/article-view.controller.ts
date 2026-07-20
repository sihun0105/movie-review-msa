import { RecordArticleViewRequest } from '@app/common/protobuf';
import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleViewController {
  constructor(private readonly articleService: ArticleService) {}

  @Post(':id/view')
  recordArticleView(
    @Param('id') id: string,
    @Body() body: Pick<RecordArticleViewRequest, 'viewerKey'>,
  ) {
    if (!/^[a-f0-9]{64}$/.test(body.viewerKey)) {
      throw new BadRequestException('Invalid viewer key');
    }
    return this.articleService.recordArticleView({
      articleId: Number(id),
      viewerKey: body.viewerKey,
    });
  }
}
