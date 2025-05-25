import {
  KobisResponse,
  KobisMovie,
  KmdbResponse,
  KmdbMovie,
} from '@app/common/types/movie-response';
import {
  AverageMovieScore,
  MovieData,
  MovieDatas,
  MovieScore,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
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
  private readonly tmdbAccessToken = process.env.TMDB_API_ACCESS_TOKEN;
  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    // private readonly postgresPrismaService: PostgresPrismaService,

    private readonly utilsService: UtilsService,
  ) {}

  onModuleInit() {
    this.fetchMovies();
  }
  async fetchTmdbData(title: string): Promise<{
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }> {
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
      console.warn(`fetchTmdbPoster failed for "${title}"`, error);
      return null;
    }
  }
  async fetchKmdbData(title: string): Promise<Partial<KmdbMovie>> {
    function getHighResKmdbPoster(posters: string): string {
      const urls = posters?.split('|') ?? [];
      const preferred = urls.find((url) => url.includes('/MD/')) || urls[0];
      return preferred ?? '';
    }

    // const lastYear = moment().subtract(1, 'years').format('YYYY') + '0101';
    const thisYear = moment().format('YYYY') + '0101';
    let url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,1&releaseDts=${thisYear}`;
    let response = await axios.get<KmdbResponse>(url);

    if (!response.data?.Data?.[0]?.Result?.[0]) {
      url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,1`;
      response = await axios.get<KmdbResponse>(url);

      if (!response.data?.Data?.[0]?.Result?.[0]) {
        return null;
      }
    }
    const poster = getHighResKmdbPoster(
      response.data.Data[0].Result[0].posters,
    );
    const kmdbMovie: Partial<KmdbMovie> = {
      title: response.data.Data[0].Result[0].title,
      plots: response.data.Data[0].Result[0].plots,
      posters: poster,
      vods: response.data.Data[0].Result[0].vods,
      directors: response.data.Data[0].Result[0].directors,
      genre: response.data.Data[0].Result[0].genre,
      rating: response.data.Data[0].Result[0].rating,
    };

    return kmdbMovie;
  }

  async fetchMovies(): Promise<void> {
    const formattedDate = moment().format('YYYY-MM-DD');
    const dateObject = new Date(formattedDate);
    const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');
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
    }

    try {
      const movieList = await this.fetchKoficData(yesterday);
      if (movieList) {
        const convertedMovieList = movieList?.map((item) => {
          return this.convertKobisMovieData(item);
        });

        await this.updateMovies(convertedMovieList);
      } else {
        console.warn('No daily box office list found in the response.');
      }
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  }

  private async fetchKoficData(date: string): Promise<KobisMovie[] | null> {
    const url = `${this.koficUrl}?key=${this.koficKey}&targetDt=${date}`;
    const response = await axios.get<KobisResponse>(url);
    return response.data?.boxOfficeResult?.dailyBoxOfficeList ?? null;
  }

  private async updateMovies(movieList: KobisMovie[]): Promise<void> {
    const upsertMovies = movieList.map(async (movieData) => {
      try {
        let plot = '';
        let poster = '';
        let director = '';
        let genre = '';
        let rating = '';
        let fetchedData: any = null;

        try {
          fetchedData = await this.fetchKmdbData(movieData.movieNm);

          if (fetchedData) {
            plot = fetchedData.plots?.plot?.[0]?.plotText ?? '';
            poster = fetchedData.posters ?? '';
            director = fetchedData.directors?.director?.[0]?.directorNm ?? '';
            genre = fetchedData.genre ?? '';
            rating = fetchedData.rating ?? '';
          }

          const tmdbData = await this.fetchTmdbData(movieData.movieNm);
          if (tmdbData) {
            poster = `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`;
            plot = tmdbData.overview;
          } else if (fetchedData) {
            poster = fetchedData.posters?.split('|')?.[0] ?? '';
          }
        } catch (error) {
          console.warn(`fetchKmdbData failed for ${movieData.movieNm}:`, error);
        }

        const vector = [];
        // const vector = await this.utilsService.generateEmbedding(plot);

        await this.mysqlPrismaService.movie.upsert({
          where: { movieCd: +movieData.movieCd },
          update: {
            title: movieData.movieNm,
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
            updatedAt: new Date(),
            poster: poster,
            rankInten: movieData.rankInten,
            rankOldAndNew: movieData.rankOldAndNew,
            openDt: new Date(movieData.openDt),
            plot,
            director,
            genre,
            ratting: rating,
          },
          create: {
            title: movieData.movieNm,
            movieCd: +movieData.movieCd,
            audience: +movieData.audiAcc,
            rank: +movieData.rank,
            vector: vector,
            poster: poster,
            rankInten: movieData.rankInten,
            rankOldAndNew: movieData.rankOldAndNew,
            openDt: new Date(movieData.openDt),
            plot,
            director,
            genre,
            ratting: rating,
          },
        });
        if (fetchedData?.vods?.vod?.length) {
          for (const vod of fetchedData.vods.vod) {
            const existing = await this.mysqlPrismaService.movieVod.findFirst({
              where: {
                vodUrl: vod.vodUrl,
              },
            });

            if (existing) {
              await this.mysqlPrismaService.movieVod.update({
                where: { id: existing.id },
                data: {
                  vodUrl: vod.vodUrl,
                  updatedAt: new Date(),
                },
              });
            } else {
              await this.mysqlPrismaService.movieVod.create({
                data: {
                  movieCd: +movieData.movieCd,
                  vodUrl: vod.vodUrl,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              });
            }
          }
        }
      } catch (error) {
        console.error(`Failed to upsert movie: ${movieData.movieNm}`, error);
      }
    });

    await Promise.allSettled(upsertMovies);
  }

  async getMovieDatas(): Promise<Omit<MovieDatas, 'vector'>> {
    const now = moment();
    const targetDate =
      now.hour() === 0 && now.minute() < 10 ? now.subtract(1, 'day') : now;
    const formattedDate = targetDate.format('YYYYMMDD');
    const dateObject = moment(formattedDate, 'YYYYMMDD').toDate();

    if (isNaN(dateObject.getTime())) {
      throw new Error('Invalid date provided');
    }
    const movieList = await this.mysqlPrismaService.movie.findMany({
      where: {
        updatedAt: {
          gte: new Date(dateObject),
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
  private assertKobisMovieData(unknown: any): asserts unknown is KobisMovie {
    if (
      !unknown.rnum ||
      !unknown.rank ||
      !unknown.rankInten ||
      !unknown.rankOldAndNew ||
      !unknown.movieCd ||
      !unknown.movieNm ||
      !unknown.openDt ||
      !unknown.audiAcc ||
      !unknown.audiChange ||
      !unknown.audiCnt ||
      !unknown.audiInten ||
      !unknown.salesAcc ||
      !unknown.salesAmt ||
      !unknown.salesChange ||
      !unknown.salesInten ||
      !unknown.salesShare ||
      !unknown.scrnCnt ||
      !unknown.showCnt
    ) {
      throw new Error('Invalid KobisMovie data');
    }
  }
  private convertKobisMovieData(unknown: any): KobisMovie {
    if (unknown.openDt === ' ') {
      unknown.openDt = '0';
    }
    this.assertKobisMovieData(unknown);
    return {
      rnum: unknown.rnum ?? '',
      rank: unknown.rank ?? '',
      rankInten: unknown.rankInten ?? '',
      rankOldAndNew: unknown.rankOldAndNew ?? '',
      movieCd: unknown.movieCd ?? '',
      movieNm: unknown.movieNm ?? '',
      openDt: unknown.openDt ?? '',
      audiAcc: unknown.audiAcc ?? '',
      audiChange: unknown.audiChange ?? '',
      audiCnt: unknown.audiCnt ?? '',
      audiInten: unknown.audiInten ?? '',
      salesAcc: unknown.salesAcc ?? '',
      salesAmt: unknown.salesAmt ?? '',
      salesChange: unknown.salesChange ?? '',
      salesInten: unknown.salesInten ?? '',
      salesShare: unknown.salesShare ?? '',
      scrnCnt: unknown.scrnCnt ?? '',
      showCnt: unknown.showCnt ?? '',
    };
  }

  private convertMovieData(unknown: any): Omit<MovieData, 'vector'> {
    return {
      title: unknown.title ?? '',
      audience: Number(unknown.audience) ?? 0,
      rank: Number(unknown.rank) ?? 0,
      createdAt: unknown.createdAt ?? new Date(0),
      updatedAt: unknown.updatedAt ?? new Date(0),
      id: Number(unknown.id) ?? 0,
      movieCd: Number(unknown.movieCd) ?? 0,
      poster: unknown.poster ?? '',
      rankInten: unknown.rankInten ?? 0,
      plot: unknown.plot ?? '',
      rankOldAndNew: unknown.rankOldAndNew ?? '',
      openDt: unknown.openDt ?? new Date(0),
      genre: unknown.genre ?? '',
      director: unknown.director ?? '',
      ratting: unknown.ratting ?? '',
      vods: unknown.MovieVod ?? [],
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async recommendMovies(movieCd: number): Promise<any> {
    return [];
    // const movie = await this.mysqlPrismaService.movie.findUnique({
    //   where: { movieCd },
    // });
    // if (!movie) {
    //   throw new Error(`Movie with movieCd ${movieCd} not found`);
    // }
    // const vector = movie.vector;

    // const similarMovies: { movieCd: number; similarity: number }[] = await this
    //   .postgresPrismaService.$queryRaw`SELECT "movieCd",
    // (SELECT SUM(a * b)
    //  FROM unnest("vector") AS a, unnest(ARRAY[${vector}]) AS b) AS similarity
    //   FROM public."MovieVector"
    //   WHERE "movieCd" != ${movieCd}
    //   ORDER BY similarity DESC
    //   LIMIT 10;`;
    // if (!similarMovies) {
    //   throw new Error('No similar movies found');
    // }

    // const recommendedMovies = await this.mysqlPrismaService.movie.findMany({
    //   where: {
    //     movieCd: {
    //       in: similarMovies.map((movie) => movie.movieCd),
    //     },
    //   },
    // });
    // return recommendedMovies;
  }

  async getMovieDetail(movieCd: number): Promise<MovieData> {
    const movie = await this.mysqlPrismaService.movie.findUnique({
      where: { movieCd },
      include: {
        MovieVod: true,
      },
    });
    if (!movie) {
      throw new Error(`Movie with movieCd ${movieCd} not found`);
    }

    return this.convertMovieData(movie);
  }

  async upsertMovieScore({
    movieCd,
    score,
    userId,
  }: {
    movieCd: number;
    score: number;
    userId: number;
  }): Promise<MovieScore> | null {
    const movieScore = await this.mysqlPrismaService.movieScore.upsert({
      where: {
        movieCd_Userno: {
          movieCd: movieCd,
          Userno: userId,
        },
      },
      update: {
        score,
        updatedAt: new Date(),
      },
      create: {
        movieCd,
        Userno: userId,
        score,
      },
    });

    if (!movieScore) {
      return null;
    }

    const createdAt = this.utilsService.dateToTimestamp(
      movieScore.createdAt as Date,
    );
    const updatedAt = this.utilsService.dateToTimestamp(
      movieScore.updatedAt as Date,
    );
    return {
      ...movieScore,
      userId: movieScore.Userno,
      createdAt,
      updatedAt,
    } as MovieScore;
  }
  async getMovieScore({
    movieCd,
    userId,
  }: {
    movieCd: number;
    userId: number;
  }): Promise<MovieScore> {
    const movieScore = await this.mysqlPrismaService.movieScore.findUnique({
      where: {
        movieCd_Userno: {
          movieCd: movieCd,
          Userno: userId,
        },
      },
    });

    if (!movieScore) {
      return {
        movieCd: movieCd,
        score: 0,
        userId: userId,
        createdAt: this.utilsService.dateToTimestamp(new Date(0) as Date),
        updatedAt: this.utilsService.dateToTimestamp(new Date(0) as Date),
      } as MovieScore;
    }
    const createdAt = this.utilsService.dateToTimestamp(
      movieScore.createdAt as Date,
    );
    const updatedAt = this.utilsService.dateToTimestamp(
      movieScore.updatedAt as Date,
    );

    return {
      ...movieScore,
      userId: movieScore.Userno,
      createdAt,
      updatedAt,
    } as MovieScore;
  }
  async getAverageMovieScore(movieCd: number): Promise<AverageMovieScore> {
    const movieScore = await this.mysqlPrismaService.movieScore.aggregate({
      where: {
        movieCd: movieCd,
      },
      _avg: {
        score: true,
      },
    });

    if (!movieScore) {
      return null;
    }

    const averageScore = movieScore._avg.score ?? 0;
    const scoreCount = await this.mysqlPrismaService.movieScore.count({
      where: {
        movieCd: movieCd,
      },
    });
    return {
      movieCd: movieCd,
      averageScore: averageScore,
      scoreCount: scoreCount,
    } as AverageMovieScore;
  }
}
