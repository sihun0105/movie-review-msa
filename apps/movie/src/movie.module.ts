import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';
import { CrawlingModule } from '@app/crawling';

@Module({
  imports: [PrismaModule, UtilsModule, CrawlingModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
