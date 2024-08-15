import { MovieData, MovieDatas } from '@app/common/protobuf';
import { MovieResponse } from '@app/common/types/movie-response';
import { PrismaService } from '@app/prisma';
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

  constructor(private readonly prismaService: PrismaService) {}

  onModuleInit() {
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
    this.fetchMovies(yesterday);
  }
  async fetchKmdbData(title: string): Promise<string> {
    const url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&query=${title}`;
    const response = await axios.get(url);
    return response.data?.Data?.[0]?.Result?.[0]?.posters?.split('|')[0] || '';
  }
  async fetchMovies(date: string): Promise<void> {
    try {
      const url = `${this.koficUrl}?key=${this.koficKey}&targetDt=${date}`;
      const response = await axios.get<MovieResponse>(url);

      if (response.data?.boxOfficeResult?.dailyBoxOfficeList) {
        const movieList = response.data.boxOfficeResult.dailyBoxOfficeList;

        const upsertMovies = movieList.map(async (movieData) => {
          try {
            const posterData = await this.fetchKmdbData(movieData.movieNm);
            await this.prismaService.movie.upsert({
              where: { movieCd: +movieData.movieCd },
              update: {
                title: movieData.movieNm,
                audience: +movieData.audiAcc,
                rank: +movieData.rank,
                updatedAt: new Date(),
                poster: posterData ?? '',
              },
              create: {
                title: movieData.movieNm,
                movieCd: +movieData.movieCd,
                audience: +movieData.audiAcc,
                rank: +movieData.rank,
                poster: posterData ?? '',
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

  async getMovieDatas({}): Promise<MovieDatas> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const movieList = await this.prismaService.movie.findMany({
      where: {
        updatedAt: {
          gte: yesterday,
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
}
