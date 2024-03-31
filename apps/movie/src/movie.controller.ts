import { FetchMoviesRequest, MovieServiceController } from '@app/common';
import { Controller } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController implements MovieServiceController {
  constructor(private readonly movieService: MovieService) {}

  fetchMovies(request: FetchMoviesRequest) {
    return this.movieService.fetchMovies(request.fetchDate);
  }
}
