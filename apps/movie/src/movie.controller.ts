import {
  Empty,
  FetchMoviesRequest,
  MovieDatas,
  MovieServiceController,
  MovieServiceControllerMethods,
} from '@app/common';
import { Controller } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
@MovieServiceControllerMethods()
export class MovieController implements MovieServiceController {
  constructor(private readonly movieService: MovieService) {}

  async fetchMovies(request: FetchMoviesRequest) {
    return await this.movieService.fetchMovies(request.fetchDate);
  }
  async getMovieDatas(request: Empty): Promise<MovieDatas> {
    return await this.movieService.getMovieDatas(request);
  }
}
