import { KobisMovie } from '@app/common/types/movie-response';
import { MySQLPrismaService } from '@app/prisma';
import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import moment from 'moment';
import { convertKobisMovieData } from './movie.formatter';
import { MovieMetadataClient } from './movie-metadata.client';

@Injectable()
export class MovieSyncService implements OnModuleInit {
  private readonly logger = new Logger(MovieSyncService.name);
  private readonly metadataClient = new MovieMetadataClient();

  constructor(private readonly prisma: MySQLPrismaService) {}

  onModuleInit() {
    this.fetchMovies();
  }

  async fetchMovies(): Promise<void> {
    const formattedDate = moment().format('YYYY-MM-DD');
    const dateObject = new Date(formattedDate);
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
    if (isNaN(dateObject.getTime())) {
      throw new BadRequestException('Invalid date provided');
    }

    try {
      const movieList = await this.metadataClient.fetchKoficBoxOffice(
        yesterday,
      );
      if (movieList) {
        const converted = movieList.map((item) => convertKobisMovieData(item));
        if (await this.isMovieListFresh(converted, dateObject)) return;
        await this.updateMovies(converted);
      } else {
        this.logger.warn('No daily box office list found in the response.');
      }
    } catch (error) {
      this.logger.error('Failed to fetch movies', error?.stack ?? error);
    }
  }

  private async updateMovies(movieList: KobisMovie[]): Promise<void> {
    const upserts = movieList.map(async (movieData) => {
      try {
        const { plot, poster, director, genre, rating, fetchedData } =
          await this.fetchExternalMetadata(movieData);

        await this.prisma.movie.upsert({
          where: { movieCd: +movieData.movieCd },
          update: {
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
            updatedAt: new Date(),
            rankInten: movieData.rankInten,
            rankOldAndNew: movieData.rankOldAndNew,
            ...(poster && { poster }),
            ...(plot && { plot }),
            ...(director && { director }),
            ...(genre && { genre }),
            ...(rating && { ratting: rating }),
          },
          create: {
            title: movieData.movieNm,
            movieCd: +movieData.movieCd,
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
            vector: [],
            poster,
            rankInten: movieData.rankInten,
            rankOldAndNew: movieData.rankOldAndNew,
            openDt: new Date(movieData.openDt),
            plot,
            director,
            genre,
            ratting: rating,
          },
        });

        await this.upsertVods(+movieData.movieCd, fetchedData);
      } catch (error) {
        this.logger.error(
          `Failed to upsert movie: ${movieData.movieNm}`,
          error?.stack ?? error,
        );
      }
    });
    await Promise.allSettled(upserts);
  }

  private async isMovieListFresh(movieList: KobisMovie[], dateObject: Date) {
    const movieCds = movieList.map((movie) => +movie.movieCd);
    const existingMovies = await this.prisma.movie.findMany({
      where: { movieCd: { in: movieCds } },
      select: { movieCd: true, updatedAt: true, director: true },
    });

    if (existingMovies.length !== movieList.length) return false;

    return existingMovies.every(
      (movie) =>
        movie.updatedAt >= dateObject && Boolean(movie.director?.trim()),
    );
  }

  private async fetchExternalMetadata(movieData: KobisMovie) {
    let plot = '';
    let poster = '';
    let director = '';
    let genre = '';
    let rating = '';
    let fetchedData: any = null;

    try {
      fetchedData = await this.metadataClient.fetchKmdbData(movieData.movieNm);
      if (fetchedData) {
        plot = fetchedData.plots?.plot?.[0]?.plotText ?? '';
        poster = fetchedData.posters ?? '';
        director = fetchedData.directors?.director?.[0]?.directorNm ?? '';
        genre = fetchedData.genre ?? '';
        rating = fetchedData.rating ?? '';
      }

      const koficDirector = await this.metadataClient.fetchKoficDirector(
        movieData.movieCd,
      );
      if (koficDirector) director = koficDirector;

      const tmdbData = await this.metadataClient.fetchTmdbData(
        movieData.movieNm,
      );
      if (tmdbData?.poster_path) {
        poster = `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`;
      } else if (!poster && fetchedData) {
        poster = fetchedData.posters?.split('|')?.[0] ?? '';
      }
      if (tmdbData?.overview) plot = tmdbData.overview;
      if (!director && tmdbData?.id) {
        director = await this.metadataClient.fetchTmdbDirector(tmdbData.id);
      }
    } catch (error) {
      this.logger.warn(
        `fetchExternalMetadata failed for ${movieData.movieNm}: ${error}`,
      );
    }

    return { plot, poster, director, genre, rating, fetchedData };
  }

  private async upsertVods(movieCd: number, fetchedData: any) {
    if (!fetchedData?.vods?.vod?.length) return;
    for (const vod of fetchedData.vods.vod) {
      const existing = await this.prisma.movieVod.findFirst({
        where: { vodUrl: vod.vodUrl },
      });
      if (existing) {
        await this.prisma.movieVod.update({
          where: { id: existing.id },
          data: { vodUrl: vod.vodUrl, updatedAt: new Date() },
        });
      } else {
        await this.prisma.movieVod.create({
          data: {
            movieCd,
            vodUrl: vod.vodUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      }
    }
  }
}
