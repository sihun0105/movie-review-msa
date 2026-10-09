import { MySQLPrismaService } from '@app/prisma';
import { Injectable, Logger } from '@nestjs/common';
import { MovieMetadataResolverService } from './movie-metadata-resolver.service';
import { MoviePosterStorageService } from './movie-poster-storage.service';

@Injectable()
export class MoviePosterBackfillService {
  private readonly logger = new Logger(MoviePosterBackfillService.name);

  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly resolver: MovieMetadataResolverService,
    private readonly storage: MoviePosterStorageService,
  ) {}

  async run(limit = 40): Promise<void> {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - 24);
    const movies = await this.prisma.movie.findMany({
      where: {
        openDt: { gte: cutoff },
        OR: [{ poster: null }, { poster: '' }],
      },
      orderBy: [{ openDt: 'desc' }, { movieCd: 'desc' }],
      take: limit,
      select: { movieCd: true, title: true, openDt: true },
    });
    let updated = 0;

    for (let index = 0; index < movies.length; index += 4) {
      const batch = movies.slice(index, index + 4);
      const results = await Promise.allSettled(
        batch.map(async (movie) => {
          if (!movie.title) return;
          const metadata = await this.resolver.resolve({
            movieCd: String(movie.movieCd),
            title: movie.title,
            releaseYear: movie.openDt?.getFullYear(),
          });
          if (!metadata.poster) return;
          const poster = await this.storage.mirrorPoster(
            metadata.poster,
            movie.movieCd,
          );
          if (!poster) return;
          await this.prisma.movie.update({
            where: { movieCd: movie.movieCd },
            data: {
              poster,
              ...(metadata.plot && { plot: metadata.plot }),
              ...(metadata.director && { director: metadata.director }),
              ...(metadata.genre && { genre: metadata.genre }),
              ...(metadata.rating && { ratting: metadata.rating }),
            },
          });
          updated += 1;
        }),
      );
      results.forEach((result) => {
        if (result.status === 'rejected') {
          this.logger.warn(`Poster backfill failed: ${result.reason}`);
        }
      });
    }

    this.logger.log(
      `Poster backfill completed: ${updated}/${movies.length} updated`,
    );
  }
}
