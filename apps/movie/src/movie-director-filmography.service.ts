import { MovieData } from '@app/common/protobuf';
import { KobisMovieListItem } from '@app/common/types/movie-response';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { convertMovieDataWithCounts } from './movie.formatter';
import { MovieMetadataClient } from './movie-metadata.client';

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

  constructor(private readonly prisma: MySQLPrismaService) {}

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
    const genre = movie.genreAlt || movie.repGenreNm || '';

    return this.prisma.movie.upsert({
      where: { movieCd },
      update: {
        title: movie.movieNm,
        openDt: openedAt,
        director,
        ...(genre && { genre }),
      },
      create: {
        movieCd,
        title: movie.movieNm,
        audience: 0,
        rank: 0,
        vector: [],
        poster: '',
        rankInten: '',
        rankOldAndNew: '',
        openDt: openedAt,
        plot: '',
        director,
        genre,
        ratting: '',
      },
      include: MOVIE_INCLUDE,
    });
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
