import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieSyncService } from './movie-sync.service';
import { MovieReadService } from './movie-read.service';
import { MovieScoreService } from './movie-score.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [MovieController],
  providers: [MovieService, MovieSyncService, MovieReadService, MovieScoreService],
})
export class MovieModule {}
