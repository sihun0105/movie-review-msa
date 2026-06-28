import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import { MovieData, MovieDatas } from '@app/common/protobuf';
import moment from 'moment';
import { convertMovieDataWithCounts } from './movie.formatter';
import { MovieDirectorFilmographyService } from './movie-director-filmography.service';

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
export class MovieReadService {
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly directorFilmography: MovieDirectorFilmographyService,
  ) {}

  async getMovieDatas(): Promise<Omit<MovieDatas, 'vector'>> {
    const now = moment();
    const targetDate =
      now.hour() === 0 && now.minute() < 10 ? now.subtract(1, 'day') : now;
    const formattedDate = targetDate.format('YYYYMMDD');
    const dateObject = moment(formattedDate, 'YYYYMMDD').toDate();

    if (isNaN(dateObject.getTime())) {
      throw new BadRequestException('Invalid date provided');
    }

    const movieList = await this.prisma.movie.findMany({
      where: {
        updatedAt: { gte: new Date(dateObject) },
        rank: { gt: 0 },
      },
      include: MOVIE_INCLUDE,
      take: 10,
      orderBy: [{ rank: 'asc' }],
    });

    return {
      MovieData: movieList.map((movieData) =>
        convertMovieDataWithCounts({
          ...movieData,
          _count: {
            Comment: movieData._count.Comment,
            movieScores: movieData.movieScores?.length ?? 0,
          },
        }),
      ),
    };
  }

  async recommendMovies(_movieCd: number): Promise<any> {
    // TODO: 벡터 유사도 검색 미구현 — Milvus 또는 pgvector 연동 후 활성화
    return [];
  }

  async getMovieDetail(movieCd: number): Promise<MovieData> {
    const movie = await this.prisma.movie.findUnique({
      where: { movieCd },
      include: MOVIE_INCLUDE,
    });
    if (!movie) {
      throw new NotFoundException(`Movie with movieCd ${movieCd} not found`);
    }

    return convertMovieDataWithCounts({
      ...movie,
      _count: {
        Comment: movie._count.Comment,
        movieScores: movie.movieScores?.length ?? 0,
      },
    });
  }

  async getMoviesByDirector({
    name,
    excludeMovieCd,
    limit,
  }: {
    name: string;
    excludeMovieCd: number;
    limit: number;
  }): Promise<MovieDatas> {
    const directorName = name.trim();
    if (!directorName) return { MovieData: [] };

    const take = Math.min(Math.max(limit || 12, 1), 12);
    const movieList = await this.prisma.movie.findMany({
      where: {
        director: { contains: directorName },
        movieCd: { not: excludeMovieCd || 0 },
      },
      include: MOVIE_INCLUDE,
      take,
      orderBy: [{ openDt: 'desc' }, { rank: 'asc' }],
    });

    const enrichedMovieList =
      await this.directorFilmography.enrichStoredFallbackMovies(movieList);
    const dbMovies = enrichedMovieList.map((movieData) =>
      convertMovieDataWithCounts({
        ...movieData,
        _count: {
          Comment: movieData._count.Comment,
          movieScores: movieData.movieScores?.length ?? 0,
        },
      }),
    );
    const externalMovies =
      dbMovies.length < take
        ? await this.directorFilmography.fillFromKofic({
            directorName,
            excludeMovieCd,
            excludedMovieCds: dbMovies.map((movie) => movie.movieCd),
            limit: take - dbMovies.length,
          })
        : [];

    return { MovieData: [...dbMovies, ...externalMovies] };
  }
}
