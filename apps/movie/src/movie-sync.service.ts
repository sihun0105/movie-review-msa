import {
  KobisResponse,
  KobisMovie,
  KmdbResponse,
  KmdbMovie,
} from '@app/common/types/movie-response';
import { MySQLPrismaService } from '@app/prisma';
import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import axios from 'axios';
import moment from 'moment';
import { convertKobisMovieData } from './movie.formatter';

@Injectable()
export class MovieSyncService implements OnModuleInit {
  private readonly logger = new Logger(MovieSyncService.name);
  private readonly koficKey = process.env.KOFIC_API_KEY;
  private readonly koficUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  private readonly kmdbUrl =
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';
  private readonly kmdbKey = process.env.KMDB_API_KEY;
  private readonly tmdbAccessToken = process.env.TMDB_API_ACCESS_TOKEN;

  constructor(private readonly prisma: MySQLPrismaService) {}

  onModuleInit() {
    this.fetchMovies();
  }

  async fetchTmdbData(title: string) {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${title}&language=ko-KR`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.tmdbAccessToken}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data.results[0];
    } catch (error) {
      this.logger.warn(`fetchTmdbPoster failed for "${title}": ${error}`);
      return null;
    }
  }

  async fetchKmdbData(title: string): Promise<Partial<KmdbMovie>> {
    function getHighResKmdbPoster(posters: string): string {
      const urls = posters?.split('|') ?? [];
      const preferred = urls.find((url) => url.includes('/MD/')) || urls[0];
      return preferred ?? '';
    }

    const thisYear = moment().format('YYYY') + '0101';
    let url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,0&releaseDts=${thisYear}`;
    let response = await axios.get<KmdbResponse>(url);

    if (!response.data?.Data?.[0]?.Result?.[0]) {
      url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,0`;
      response = await axios.get<KmdbResponse>(url);
      if (!response.data?.Data?.[0]?.Result?.[0]) return null;
    }

    const poster = getHighResKmdbPoster(
      response.data.Data[0].Result[0].posters,
    );
    return {
      title: response.data.Data[0].Result[0].title,
      plots: response.data.Data[0].Result[0].plots,
      posters: poster,
      vods: response.data.Data[0].Result[0].vods,
      directors: response.data.Data[0].Result[0].directors,
      genre: response.data.Data[0].Result[0].genre,
      rating: response.data.Data[0].Result[0].rating,
    };
  }

  async fetchMovies(): Promise<void> {
    const formattedDate = moment().format('YYYY-MM-DD');
    const dateObject = new Date(formattedDate);
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
    if (isNaN(dateObject.getTime())) {
      throw new BadRequestException('Invalid date provided');
    }

    const isUpdated = await this.prisma.movie.findFirst({
      where: { updatedAt: { gte: dateObject } },
    });
    if (isUpdated) return;

    try {
      const movieList = await this.fetchKoficData(yesterday);
      if (movieList) {
        const converted = movieList.map((item) => convertKobisMovieData(item));
        await this.updateMovies(converted);
      } else {
        this.logger.warn('No daily box office list found in the response.');
      }
    } catch (error) {
      this.logger.error('Failed to fetch movies', error?.stack ?? error);
    }
  }

  private async fetchKoficData(date: string): Promise<KobisMovie[] | null> {
    const url = `${this.koficUrl}?key=${this.koficKey}&targetDt=${date}`;
    const response = await axios.get<KobisResponse>(url);
    return response.data?.boxOfficeResult?.dailyBoxOfficeList ?? null;
  }

  private async updateMovies(movieList: KobisMovie[]): Promise<void> {
    const upserts = movieList.map(async (movieData) => {
      try {
        const { plot, poster, director, genre, rating, fetchedData } =
          await this.fetchExternalMetadata(movieData.movieNm);

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

  private async fetchExternalMetadata(movieNm: string) {
    let plot = '';
    let poster = '';
    let director = '';
    let genre = '';
    let rating = '';
    let fetchedData: any = null;

    try {
      fetchedData = await this.fetchKmdbData(movieNm);
      if (fetchedData) {
        plot = fetchedData.plots?.plot?.[0]?.plotText ?? '';
        poster = fetchedData.posters ?? '';
        director = fetchedData.directors?.director?.[0]?.directorNm ?? '';
        genre = fetchedData.genre ?? '';
        rating = fetchedData.rating ?? '';
      }

      const tmdbData = await this.fetchTmdbData(movieNm);
      if (tmdbData?.poster_path) {
        poster = `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`;
      } else if (!poster && fetchedData) {
        poster = fetchedData.posters?.split('|')?.[0] ?? '';
      }
      if (tmdbData?.overview) plot = tmdbData.overview;
    } catch (error) {
      this.logger.warn(`fetchKmdbData failed for ${movieNm}: ${error}`);
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
