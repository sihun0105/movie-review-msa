import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieSyncService } from './movie-sync.service';
import { MovieReadService } from './movie-read.service';
import { MovieScoreService } from './movie-score.service';
import { MoviePosterStorageService } from './movie-poster-storage.service';
import { MovieDirectorFilmographyService } from './movie-director-filmography.service';
import { MovieDirectorFilmographyCacheService } from './movie-director-filmography-cache.service';
import { MovieSitemapService } from './movie-sitemap.service';
import { MovieCastService } from './movie-cast.service';
import { MovieActorStorageService } from './movie-actor-storage.service';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [PrismaModule, UtilsModule],
  controllers: [MovieController],
  providers: [
    MovieService,
    MovieSyncService,
    MovieReadService,
    MovieScoreService,
    MoviePosterStorageService,
    MovieDirectorFilmographyService,
    MovieDirectorFilmographyCacheService,
    MovieSitemapService,
    MovieCastService,
    MovieActorStorageService,
  ],
})
export class MovieModule {}
