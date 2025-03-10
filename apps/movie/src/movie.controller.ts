import {
  Empty,
  FetchMoviesRequest,
  MovieData,
  MovieDatas,
  MovieServiceController,
  MovieServiceControllerMethods,
  RecommendMovieRequest,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
@MovieServiceControllerMethods()
export class MovieController implements MovieServiceController {
  constructor(private readonly movieService: MovieService) {}

  async fetchMovies(request: FetchMoviesRequest) {
    return await this.movieService.fetchMovies(request.fetchDate);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getMovieDatas(request: Empty): Promise<Omit<MovieDatas, 'vector'>> {
    return await this.movieService.getMovieDatas();
  }
  async recommendMovie(request: RecommendMovieRequest): Promise<MovieDatas> {
    return await this.movieService.recommendMovies(request.movieCd);
  }
  async getMovieDetailData(request: RecommendMovieRequest): Promise<MovieData> {
    return await this.movieService.getMovieDetail(request.movieCd);
  }
}
