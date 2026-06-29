import { MovieData } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { convertMovieDataWithCounts } from './movie.formatter';

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
export class MovieDirectorFilmographyCacheService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async findCached({
    directorName,
    excludeMovieCd,
    limit,
  }: {
    directorName: string;
    excludeMovieCd: number;
    limit: number;
  }): Promise<MovieData[]> {
    const rows = await this.prisma.directorFilmography.findMany({
      where: {
        directorName,
        movieCd: { not: excludeMovieCd || 0 },
      },
      include: { Movie: { include: MOVIE_INCLUDE } },
      orderBy: [{ sortOrder: 'asc' }, { Movie: { openDt: 'desc' } }],
      take: limit,
    });

    return rows.map((row) => this.toMovieData(row.Movie));
  }

  async seedFromMovieTable({
    directorName,
    excludeMovieCd,
    limit,
  }: {
    directorName: string;
    excludeMovieCd: number;
    limit: number;
  }): Promise<MovieData[]> {
    const movies = await this.prisma.movie.findMany({
      where: {
        director: { contains: directorName },
        movieCd: { not: excludeMovieCd || 0 },
      },
      include: MOVIE_INCLUDE,
      take: limit,
      orderBy: [{ openDt: 'desc' }, { rank: 'asc' }],
    });

    await this.saveMovieCodes({
      directorName,
      movieCds: movies.map((movie) => movie.movieCd),
      source: 'db',
    });

    return movies.map((movie) => this.toMovieData(movie));
  }

  async saveMovieData({
    directorName,
    movies,
    source,
    startOrder = 0,
  }: {
    directorName: string;
    movies: MovieData[];
    source: string;
    startOrder?: number;
  }): Promise<void> {
    await this.saveMovieCodes({
      directorName,
      movieCds: movies.map((movie) => movie.movieCd),
      source,
      startOrder,
    });
  }

  private async saveMovieCodes({
    directorName,
    movieCds,
    source,
    startOrder = 0,
  }: {
    directorName: string;
    movieCds: number[];
    source: string;
    startOrder?: number;
  }): Promise<void> {
    await Promise.all(
      movieCds.map((movieCd, index) =>
        this.prisma.directorFilmography.upsert({
          where: {
            directorName_movieCd: {
              directorName,
              movieCd,
            },
          },
          update: {
            sortOrder: startOrder + index,
            source,
          },
          create: {
            directorName,
            movieCd,
            sortOrder: startOrder + index,
            source,
          },
        }),
      ),
    );
  }

  private toMovieData(movieData: any): MovieData {
    return convertMovieDataWithCounts({
      ...movieData,
      _count: {
        Comment: movieData._count.Comment,
        movieScores: movieData.movieScores?.length ?? 0,
      },
    });
  }
}
