import {
  MOVIE_PACKAGE_NAME,
  MOVIE_SERVICE_NAME,
  MovieServiceClient,
} from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  private movieService: MovieServiceClient;
  constructor(
    @Inject(MOVIE_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.movieService =
      this.client.getService<MovieServiceClient>(MOVIE_SERVICE_NAME);
  }

  @Cron('0 0 * * *')
  getMoviedata() {
    const nowdate = new Date();
    const formattedDate =
      nowdate.getFullYear().toString() +
      (nowdate.getMonth() + 1).toString().padStart(2, '0') +
      (nowdate.getDate() - 1).toString().padStart(2, '0');
    this.movieService.fetchMovies({
      fetchDate: formattedDate,
    });
  }
}
