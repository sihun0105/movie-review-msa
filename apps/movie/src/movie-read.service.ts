import { Injectable, BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@app/common/filters/rpcexception/rpc-exception';
import { MySQLPrismaService } from '@app/prisma';
import { MovieData, MovieDatas } from '@app/common/protobuf';
import moment from 'moment';
import { convertMovieDataWithCounts } from './movie.formatter';
import { MovieDirectorFilmographyService } from './movie-director-filmography.service';
import { MovieDirectorFilmographyCacheService } from './movie-director-filmography-cache.service';
import { MovieCastService } from './movie-cast.service';

const MOVIE_INCLUDE = {
  MovieVod: true,
  movieScores: { where: { deletedAt: null } },
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
    private readonly filmographyCache: MovieDirectorFilmographyCacheService,
    private readonly movieCast: MovieCastService,
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

    const movieList = await this.findTodayRankedMovies(dateObject);
    const fallbackList =
      movieList.length > 0 ? movieList : await this.findRecentRankedMovies();

    return {
      MovieData: fallbackList.map((movieData) =>
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

  private findTodayRankedMovies(dateObject: Date) {
    return this.prisma.movie.findMany({
      where: {
        updatedAt: { gte: new Date(dateObject) },
        rank: { gt: 0 },
      },
      include: MOVIE_INCLUDE,
      take: 10,
      orderBy: [{ rank: 'asc' }],
    });
  }

  private async findRecentRankedMovies() {
    const movies = await this.prisma.movie.findMany({
      where: { rank: { gt: 0 } },
      include: MOVIE_INCLUDE,
      take: 30,
      orderBy: [{ updatedAt: 'desc' }],
    });

    return movies
      .sort((a, b) => Number(a.rank ?? 999) - Number(b.rank ?? 999))
      .slice(0, 10);
  }

  async recommendMovies(movieCd: number): Promise<any> {
    void movieCd;
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

    const actors = await this.movieCast.getCast({
      movieCd,
      title: movie.title ?? '',
      releaseYear: movie.openDt?.getFullYear(),
    });

    return convertMovieDataWithCounts({
      ...movie,
      actors,
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
    const cachedMovies = await this.filmographyCache.findCached({
      directorName,
      excludeMovieCd,
      limit: take,
    });

    if (cachedMovies.length >= take) {
      return { MovieData: cachedMovies };
    }

    const dbMovies = await this.filmographyCache.seedFromMovieTable({
      directorName,
      excludeMovieCd,
      limit: take,
    });
    const movies =
      dbMovies.length > cachedMovies.length ? dbMovies : cachedMovies;

    if (movies.length < take) {
      this.queueExternalFilmographyFill({
        directorName,
        excludeMovieCd,
        movies,
        limit: take - movies.length,
      });
    }

    return { MovieData: movies };
  }

  private queueExternalFilmographyFill({
    directorName,
    excludeMovieCd,
    movies,
    limit,
  }: {
    directorName: string;
    excludeMovieCd: number;
    movies: MovieData[];
    limit: number;
  }): void {
    void this.directorFilmography
      .fillFromKofic({
        directorName,
        excludeMovieCd,
        excludedMovieCds: movies.map((movie) => movie.movieCd),
        limit,
      })
      .then((externalMovies) =>
        this.filmographyCache.saveMovieData({
          directorName,
          movies: externalMovies,
          source: 'kofic',
          startOrder: movies.length,
        }),
      )
      .catch(() => undefined);
  }
}
