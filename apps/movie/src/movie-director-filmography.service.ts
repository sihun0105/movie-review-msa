import { MovieData } from '@app/common/protobuf';
import { KobisMovieListItem } from '@app/common/types/movie-response';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { convertMovieDataWithCounts } from './movie.formatter';
import { MovieMetadataClient } from './movie-metadata.client';
import { MoviePosterStorageService } from './movie-poster-storage.service';

const MOVIE_INCLUDE = {
  MovieVod: true,
  movieScores: true,
  _count: {
    select: {
      Comment: { where: { deletedAt: null } },
    },
  },
} as const;

@Injectable()
export class MovieDirectorFilmographyService {
  private readonly metadataClient = new MovieMetadataClient();

  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly posterStorage: MoviePosterStorageService,
  ) {}

  async enrichStoredFallbackMovies<T extends { movieCd: number; rank: bigint }>(
    movies: T[],
  ): Promise<T[]> {
    return Promise.all(
      movies.map(async (movie) => {
        if (!this.needsMetadata(movie)) return movie;

        const metadata = await this.fetchMetadata(
          {
            movieCd: String(movie.movieCd),
            movieNm: (movie as any).title ?? '',
            prdtYear: '',
            openDt: '',
            genreAlt: (movie as any).genre ?? '',
            repGenreNm: '',
            directors: [],
          },
          movie.movieCd,
        );

        if (
          !metadata.poster &&
          !metadata.plot &&
          !metadata.genre &&
          !metadata.rating
        ) {
          return movie;
        }

        return (await this.prisma.movie.update({
          where: { movieCd: movie.movieCd },
          data: {
            ...(metadata.poster && { poster: metadata.poster }),
            ...(metadata.plot && { plot: metadata.plot }),
            ...(metadata.genre && { genre: metadata.genre }),
            ...(metadata.rating && { ratting: metadata.rating }),
          },
          include: MOVIE_INCLUDE,
        })) as unknown as T;
      }),
    );
  }

  async fillFromKofic({
    directorName,
    excludeMovieCd,
    excludedMovieCds,
    limit,
  }: {
    directorName: string;
    excludeMovieCd: number;
    excludedMovieCds: number[];
    limit: number;
  }): Promise<MovieData[]> {
    const candidates = await this.metadataClient.fetchKoficMoviesByDirector(
      directorName,
      limit + excludedMovieCds.length + 1,
    );
    const excluded = new Set([excludeMovieCd, ...excludedMovieCds]);
    const movies = candidates
      .filter((movie) => !excluded.has(Number(movie.movieCd)))
      .slice(0, limit);

    const upserted = await Promise.all(
      movies.map((movie) => this.upsertKoficMovie(movie, directorName)),
    );

    return upserted.map((movieData) =>
      convertMovieDataWithCounts({
        ...movieData,
        _count: {
          Comment: movieData._count.Comment,
          movieScores: movieData.movieScores?.length ?? 0,
        },
      }),
    );
  }

  private async upsertKoficMovie(
    movie: KobisMovieListItem,
    directorName: string,
  ) {
    const movieCd = Number(movie.movieCd) || 0;
    const openedAt = this.parseKoficOpenDate(movie.openDt, movie.prdtYear);
    const director = this.getDirectorNames(movie) || directorName;
    const metadata = await this.fetchMetadata(movie, movieCd);
    const genre = metadata.genre || movie.genreAlt || movie.repGenreNm || '';

    return this.prisma.movie.upsert({
      where: { movieCd },
      update: {
        title: movie.movieNm,
        openDt: openedAt,
        director,
        ...(metadata.poster && { poster: metadata.poster }),
        ...(metadata.plot && { plot: metadata.plot }),
        ...(genre && { genre }),
        ...(metadata.rating && { ratting: metadata.rating }),
      },
      create: {
        movieCd,
        title: movie.movieNm,
        audience: 0,
        rank: 0,
        vector: [],
        poster: metadata.poster,
        rankInten: '',
        rankOldAndNew: '',
        openDt: openedAt,
        plot: metadata.plot,
        director,
        genre,
        ratting: metadata.rating,
      },
      include: MOVIE_INCLUDE,
    });
  }

  private needsMetadata(movie: any): boolean {
    return Number(movie.rank) === 0 && (!movie.poster || !movie.plot);
  }

  private async fetchMetadata(movie: KobisMovieListItem, movieCd: number) {
    const title = movie.movieNm ?? '';
    const [koficMetadata, kmdbData, tmdbData] = await Promise.all([
      this.metadataClient.fetchKoficMetadata(movie.movieCd),
      this.metadataClient.fetchKmdbData(title),
      this.metadataClient.fetchTmdbData(title),
    ]);
    const poster =
      (tmdbData?.poster_path
        ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`
        : '') ||
      kmdbData?.posters ||
      '';

    return {
      poster: await this.posterStorage.mirrorPoster(poster, movieCd),
      plot:
        tmdbData?.overview ||
        kmdbData?.plots?.plot?.[0]?.plotText?.trim() ||
        '',
      genre: koficMetadata.genre || kmdbData?.genre || '',
      rating: koficMetadata.rating || kmdbData?.rating || '',
    };
  }

  private getDirectorNames(movie: KobisMovieListItem) {
    return (
      movie.directors
        ?.map((director) => director.peopleNm?.trim())
        ?.filter(Boolean)
        ?.join(', ') ?? ''
    );
  }

  private parseKoficOpenDate(openDt: string, prdtYear: string): Date {
    if (/^\d{8}$/.test(openDt)) {
      return moment(openDt, 'YYYYMMDD').toDate();
    }
    if (/^\d{4}$/.test(prdtYear)) {
      return moment(`${prdtYear}0101`, 'YYYYMMDD').toDate();
    }
    return new Date(0);
  }
}
