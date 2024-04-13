import { MovieData, MovieDatas } from '@app/common';
import { MovieResponse } from '@app/common/types/movie-response';
import { PrismaService } from '@app/prisma';
import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import moment from 'moment';
@Injectable()
export class MovieService implements OnModuleInit {
  private readonly apiKey = process.env.MOVIE_SECRET;
  private readonly baseUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

  constructor(private readonly prismaService: PrismaService) {}

  onModuleInit() {
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
    this.fetchMovies(yesterday);
  }
  async fetchMovies(date: string): Promise<void> {
    const url = `${this.baseUrl}?key=${this.apiKey}&targetDt=${date}`;
    const response = await axios.get<MovieResponse>(url);
    if (response.data.boxOfficeResult.dailyBoxOfficeList) {
      const movieList = response.data.boxOfficeResult.dailyBoxOfficeList;
      const upsertMovies = movieList.map((movieData) =>
        this.prismaService.movie.upsert({
          where: { movieCd: +movieData.movieCd },
          update: {
            title: movieData.movieNm,
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
            updatedAt: new Date(),
          },
          create: {
            title: movieData.movieNm,
            movieCd: +movieData.movieCd,
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
          },
        }),
      );

      await Promise.all(upsertMovies);
    }
  }

  async getMovieDatas({}): Promise<MovieDatas> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const movieList = await this.prismaService.movie.findMany({
      where: {
        updatedAt: {
          gte: today,
        },
      },
      take: 10,
      orderBy: {
        rank: 'asc',
      },
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
    };
  }
}
