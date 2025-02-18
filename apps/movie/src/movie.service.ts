import { MovieData, MovieDatas } from '@app/common/protobuf';
import { MovieResponse } from '@app/common/types/movie-response';
import { MySQLPrismaService } from '@app/prisma';
// import { PostgresPrismaService } from '@app/prisma/postgres-prisma.service';
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
    // private readonly postgresPrismaService: PostgresPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  onModuleInit() {
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
    this.fetchMovies(yesterday);
  }
  async fetchKmdbData(title: string): Promise<{
    poster: string;
    plot: string;
    genre: string;
    rating: string;
    director: string;
  }> {
    const lastYear = moment().subtract(1, 'years').format('YYYY') + '0101';
    let url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,1&releaseDts=${lastYear}`;
    let response = await axios.get(url);

    if (!response.data?.Data?.[0]?.Result?.[0]) {
      url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,1`;
      response = await axios.get(url);

      if (!response.data?.Data?.[0]?.Result?.[0]) {
        throw new Error(`No data found for title: ${title}`);
      }
    }

    const poster =
      response.data?.Data?.[0]?.Result?.[0]?.posters?.split('|')[0];
    const plot =
      response.data?.Data?.[0]?.Result?.[0]?.plots.plot[0].plotText ?? '';
    const rating = response.data?.Data?.[0]?.Result[0].rating;
    const genre = response.data?.Data?.[0]?.Result[0].genre;
    const director =
      response.data?.Data?.[0]?.Result[0].directors.director[0].directorNm;
    return { poster, plot, genre, rating, director };
  }

  async fetchMovies(date: string): Promise<void> {
    const formattedDate = moment().format('YYYY-MM-DD');
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
      return;
    } else {
      try {
        const movieList = await this.fetchKoficData(date);
        if (movieList) {
          await this.updateMovies(movieList);
        } else {
          console.warn('No daily box office list found in the response.');
        }
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }
  }

  private async fetchKoficData(
    date: string,
  ): Promise<MovieResponse['boxOfficeResult']['dailyBoxOfficeList'] | null> {
    const url = `${this.koficUrl}?key=${this.koficKey}&targetDt=${date}`;
    const response = await axios.get<MovieResponse>(url);
    return response.data?.boxOfficeResult?.dailyBoxOfficeList ?? null;
  }

  private async updateMovies(
    movieList: MovieResponse['boxOfficeResult']['dailyBoxOfficeList'],
  ): Promise<void> {
    const upsertMovies = movieList.map(async (movieData) => {
      try {
        const { plot, poster, director, genre, rating } =
          await this.fetchKmdbData(movieData.movieNm);
        // const vector = await this.utilsService.generateEmbedding(plot);
        const vector = [];
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
            plot: plot,
            director: director,
            genre: genre,
            ratting: rating,
          },
          create: {
            title: movieData.movieNm,
            movieCd: +movieData.movieCd,
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
            vector: vector,
            poster: poster ?? '',
            rankInten: movieData.rankInten + '',
            rankOldAndNew: movieData.rankOldAndNew,
            openDt: new Date(movieData.openDt),
            plot: plot,
            director: director,
            genre: genre,
            ratting: rating,
          },
        });
        // await this.postgresPrismaService.movieVector.upsert({
        //   where: { movieCd: +movieData.movieCd },
        //   update: {
        //     vector: vector,
        //     updatedAt: new Date(),
        //   },
        //   create: {
        //     movieCd: +movieData.movieCd,
        //     vector: vector,
        //   },
        // });
      } catch (error) {
        console.error(`Failed to upsert movie: ${movieData.movieNm}`, error);
      }
    });

    await Promise.all(upsertMovies);
  }

  async getMovieDatas({}): Promise<Omit<MovieDatas, 'vector'>> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');

    const movieList = await this.mysqlPrismaService.movie.findMany({
      where: {
        updatedAt: {
          gte: new Date(yesterday),
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

  private convertMovieData(unknown: any): Omit<MovieData, 'vector'> {
    return {
      title: unknown.title,
      audience: Number(unknown.audience),
      rank: Number(unknown.rank),
      createdAt: unknown.createdAt,
      updatedAt: unknown.updatedAt,
      id: Number(unknown.id),
      movieCd: Number(unknown.movieCd),
      poster: unknown.poster,
      rankInten: unknown.rankInten,
      plot: unknown.plot,
      rankOldAndNew: unknown.rankOldAndNew,
      openDt: unknown.openDt,
      genre: unknown.genre,
      director: unknown.director,
      ratting: unknown.ratting,
    };
  }
  // async recommendMovies(movieCd: number): Promise<any> {
  //   const movie = await this.mysqlPrismaService.movie.findUnique({
  //     where: { movieCd },
  //   });
  //   if (!movie) {
  //     throw new Error(`Movie with movieCd ${movieCd} not found`);
  //   }
  //   const vector = movie.vector;

  //   const similarMovies: { movieCd: number; similarity: number }[] = await this
  //     .postgresPrismaService.$queryRaw`SELECT "movieCd",
  //   (SELECT SUM(a * b)
  //    FROM unnest("vector") AS a, unnest(ARRAY[${vector}]) AS b) AS similarity
  //     FROM public."MovieVector"
  //     WHERE "movieCd" != ${movieCd}
  //     ORDER BY similarity DESC
  //     LIMIT 10;`;
  //   if (!similarMovies) {
  //     throw new Error('No similar movies found');
  //   }

  //   const recommendedMovies = await this.mysqlPrismaService.movie.findMany({
  //     where: {
  //       movieCd: {
  //         in: similarMovies.map((movie) => movie.movieCd),
  //       },
  //     },
  //   });
  //   return recommendedMovies;
  // }
  async getMovieDetail(movieCd: number): Promise<MovieData> {
    const movie = await this.mysqlPrismaService.movie.findUnique({
      where: { movieCd },
    });
    if (!movie) {
      throw new Error(`Movie with movieCd ${movieCd} not found`);
    }
    return this.convertMovieData(movie);
  }
}
