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
}
