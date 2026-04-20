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
    let url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,0&releaseDts=${thisYear}`;
    let response = await axios.get<KmdbResponse>(url);

    if (!response.data?.Data?.[0]?.Result?.[0]) {
      url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,0`;
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
          if (tmdbData?.poster_path) {
            poster = `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`;
          } else if (!poster && fetchedData) {
            poster = fetchedData.posters?.split('|')?.[0] ?? '';
          }
          if (tmdbData?.overview) {
            plot = tmdbData.overview;
          }
        } catch (error) {
          console.warn(`fetchKmdbData failed for ${movieData.movieNm}:`, error);
        }

        const vector = [];

        await this.mysqlPrismaService.movie.upsert({
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
      include: {
        MovieVod: true,
        movieScores: true, // Include movieScores for average calculation
      },
      take: 10,
      orderBy: [
        {
          rank: 'asc',
        },
      ],
    });

    // soft delete되지 않은 댓글 개수 병렬 조회
    const commentCounts = await Promise.all(
      movieList.map((movie) =>
        this.mysqlPrismaService.comment.count({
          where: {
            movieId: movie.movieCd,
            deletedAt: null,
          },
        }),
      ),
    );

    const convertedMovieList = movieList.map((movieData, idx) =>
      this.convertMovieDataWithCounts({
        ...movieData,
        _count: {
          Comment: commentCounts[idx],
          movieScores: movieData.movieScores?.length ?? 0,
        },
      }),
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
      commentCount: 0,
      scoreCount: 0,
      averageScore: 0,
    };
  }

  private convertMovieDataWithCounts(
    movieData: any,
  ): Omit<MovieData, 'vector'> {
    const scoreSum =
      movieData.movieScores?.reduce((sum, score) => sum + score.score, 0) || 0; // score.value -> score.score로 수정
    const scoreCount = movieData._count?.movieScores || 0;

    // 소수점 1번자리 올림으로 표현
    const averageScore =
      Math.round((scoreCount > 0 ? scoreSum / scoreCount : 0) * 10) / 10;

    return {
      title: movieData.title ?? '',
      audience: Number(movieData.audience) ?? 0,
      rank: Number(movieData.rank) ?? 0,
      createdAt: movieData.createdAt ?? new Date(0),
      updatedAt: movieData.updatedAt ?? new Date(0),
      id: Number(movieData.id) ?? 0,
      movieCd: Number(movieData.movieCd) ?? 0,
      poster: movieData.poster ?? '',
      rankInten: movieData.rankInten ?? 0,
      plot: movieData.plot ?? '',
      rankOldAndNew: movieData.rankOldAndNew ?? '',
      openDt: movieData.openDt ?? new Date(0),
      genre: movieData.genre ?? '',
      director: movieData.director ?? '',
      ratting: movieData.ratting ?? '',
      vods: movieData.MovieVod ?? [],
      commentCount: movieData._count?.Comment ?? 0,
      scoreCount: scoreCount,
      averageScore: averageScore,
    } as Omit<MovieData, 'vector'>;
  }
  async recommendMovies(_movieCd: number): Promise<any> {
    // TODO: 벡터 유사도 검색 미구현 — Milvus 또는 pgvector 연동 후 활성화
    return [];
  }

  async getMovieDetail(movieCd: number): Promise<MovieData> {
    const movie = await this.mysqlPrismaService.movie.findUnique({
      where: { movieCd },
      include: {
        MovieVod: true,
        movieScores: true,
      },
    });
    if (!movie) {
      throw new Error(`Movie with movieCd ${movieCd} not found`);
    }

    // soft delete되지 않은 댓글 개수 구하기
    const commentCount = await this.mysqlPrismaService.comment.count({
      where: {
        movieId: movie.movieCd,
        deletedAt: null,
      },
    });
    // convertMovieDataWithCounts에 commentCount를 전달하도록 수정
    return this.convertMovieDataWithCounts({
      ...movie,
      _count: {
        Comment: commentCount,
        movieScores: movie.movieScores?.length ?? 0,
      },
    });
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
      return {
        movieCd: movieCd,
        averageScore: 0,
        scoreCount: 0,
      };
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
