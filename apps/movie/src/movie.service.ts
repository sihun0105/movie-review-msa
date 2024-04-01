import { MovieResponse } from '@app/common/types/movie-response';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class MovieService {
  private readonly apiKey = process.env.MOVIE_SECRET;
  private readonly baseUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

  constructor(private readonly prismaService: PrismaService) {}
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
}
