import {
  MOVIE_PACKAGE_NAME,
  MOVIE_SERVICE_NAME,
  MovieServiceClient,
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import moment from 'moment';
import { firstValueFrom } from 'rxjs';
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

  async fetchMoviedata() {
    if (!this.movieService) {
      console.log('Movie service is not initialized.');
      return;
    }
    const formattedDate = moment().subtract(1, 'days').format('YYYYMMDD');
    try {
      const observableData = this.movieService.fetchMovies({
        fetchDate: formattedDate,
      });
      const result = await firstValueFrom(observableData);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
