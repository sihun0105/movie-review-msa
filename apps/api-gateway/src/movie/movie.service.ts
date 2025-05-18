import {
  MOVIE_PACKAGE_NAME,
  MOVIE_SERVICE_NAME,
  MovieServiceClient,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class MovieService implements OnModuleInit {
  private movieService: MovieServiceClient;
  constructor(
    @Inject(MOVIE_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.movieService =
      this.client.getService<MovieServiceClient>(MOVIE_SERVICE_NAME);
  }

  async getMovieDatas() {
    return await this.movieService.getMovieDatas({});
  }
  async recommendMovies(movieCd: number) {
    return await this.movieService.recommendMovie({ movieCd });
  }
  async getMovieDetail(movieCd: number) {
    return await this.movieService.getMovieDetailData({ movieCd });
  }
  async upsertMovieScore({ userNumber, movieCd, score }) {
    return await this.movieService.upsertMovieScore({
      userId: userNumber,
      movieCd: +movieCd,
      score: score,
    });
  }
  async getMovieScore({ movieCd, userNumber }) {
    return await this.movieService.getMovieScore({
      movieCd: +movieCd,
      userId: userNumber,
    });
  }
  async getAverageMovieScore({ movieCd }) {
    return await this.movieService.getAverageMovieScore({ movieCd: +movieCd });
  }
}
