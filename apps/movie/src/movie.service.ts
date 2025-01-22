import { MovieData, MovieDatas } from '@app/common/protobuf';
import { MovieResponse } from '@app/common/types/movie-response';
import { MySQLPrismaService } from '@app/prisma';
import { PostgresPrismaService } from '@app/prisma/postgres-prisma.service';
import { UtilsService } from '@app/utils';
import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import moment from 'moment';
@Injectable()
export class MovieService implements OnModuleInit {
  private readonly koficKey = process.env.KOFIC_API_KEY;
  private readonly koficUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  private readonly kmdbUrl =
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';
  private readonly kmdbKey = process.env.KMDB_API_KEY;

  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly postgresPrismaService: PostgresPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  onModuleInit() {
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
    this.fetchMovies(yesterday);
  }
  async fetchKmdbData(title: string): Promise<{
    poster: string;
    plot: string;
  }> {
    const url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,1`;
    const response = await axios.get(url);
    const poster =
      response.data?.Data?.[0]?.Result?.[0]?.posters?.split('|')[0];
    const plot =
      response.data?.Data?.[0]?.Result?.[0]?.plots.plot[0].plotText ?? '';
    return { poster, plot };
  }

  async fetchMovies(date: string): Promise<void> {
    const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
      6,
      8,
    )}`;

    const dateObject = new Date(formattedDate);

    if (isNaN(dateObject.getTime())) {
      throw new Error('Invalid date provided');
    }

    const isUpdated = await this.mysqlPrismaService.movie.findFirst({
      where: {
        updatedAt: {
          gte: dateObject,
        },
      },
    });
    if (isUpdated) {
      console.log('Movies already updated for the date:', date);
      return;
    } else {
      try {
        const url = `${this.koficUrl}?key=${this.koficKey}&targetDt=${date}`;
        const response = await axios.get<MovieResponse>(url);
        if (response.data?.boxOfficeResult?.dailyBoxOfficeList) {
          const movieList = response.data.boxOfficeResult.dailyBoxOfficeList;

          const upsertMovies = movieList.map(async (movieData) => {
            console.log(movieData);
            try {
              const { plot, poster } = await this.fetchKmdbData(
                movieData.movieNm,
              );
              const vector = await this.utilsService.generateEmbedding(plot);
              await this.mysqlPrismaService.movie.upsert({
                where: { movieCd: +movieData.movieCd },
                update: {
                  title: movieData.movieNm,
                  audience: +movieData.audiAcc,
                  rank: +movieData.rank,
                  updatedAt: new Date(),
                  poster: poster ?? '',
                  rankInten: movieData.rankInten + '',
                  rankOldAndNew: movieData.rankOldAndNew,
                  openDt: new Date(movieData.openDt),
                },
                create: {
                  title: movieData.movieNm,
                  movieCd: +movieData.movieCd,
                  audience: +movieData.audiAcc,
                  rank: +movieData.rank,
                  vector: vector,
                  poster: poster ?? '',
                  rankInten: movieData.rankInten + '',
                },
              });
              await this.postgresPrismaService.movieVector.upsert({
                where: { movieCd: +movieData.movieCd },
                update: {
                  vector: vector,
                  updatedAt: new Date(),
                },
                create: {
                  movieCd: +movieData.movieCd,
                  vector: vector,
                },
              });
            } catch (error) {
              console.error(
                `Failed to upsert movie: ${movieData.movieNm}`,
                error,
              );
            }
          });

          await Promise.all(upsertMovies);
        } else {
          console.warn('No daily box office list found in the response.');
        }
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }
  }
  async getMovieDatas({}): Promise<MovieDatas> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const movieList = await this.mysqlPrismaService.movie.findMany({
      where: {
        updatedAt: {
          gte: today,
        },
      },
      take: 10,
      orderBy: [
        {
          rank: 'asc',
        },
      ],
    });
    const convertedMovieList = movieList.map((movieData) =>
      this.convertMovieData(movieData),
    );
    return {
      MovieData: convertedMovieList,
    };
  }

  private convertMovieData(unknown: any): MovieData {
    return {
      title: unknown.title,
      audience: Number(unknown.audience),
      rank: Number(unknown.rank),
      createdAt: unknown.createdAt,
      updatedAt: unknown.updatedAt,
      id: Number(unknown.id),
      movieCd: Number(unknown.movieCd),
      poster: unknown.poster,
    };
  }
  async recommendMovies(movieCd: number): Promise<any> {
    const movie = await this.mysqlPrismaService.movie.findUnique({
      where: { movieCd },
    });
    if (!movie) {
      throw new Error(`Movie with movieCd ${movieCd} not found`);
    }
    const vector = movie.vector;

    const similarMovies: { movieCd: number; similarity: number }[] = await this
      .postgresPrismaService.$queryRaw`SELECT "movieCd", 
    (SELECT SUM(a * b) 
     FROM unnest("vector") AS a, unnest(ARRAY[${vector}]) AS b) AS similarity 
      FROM public."MovieVector" 
      WHERE "movieCd" != ${movieCd} 
      ORDER BY similarity DESC 
      LIMIT 10;`;
    if (!similarMovies) {
      throw new Error('No similar movies found');
    }

    const recommendedMovies = await this.mysqlPrismaService.movie.findMany({
      where: {
        movieCd: {
          in: similarMovies.map((movie) => movie.movieCd),
        },
      },
    });
    return recommendedMovies;
  }
}
