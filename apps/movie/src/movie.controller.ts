import {
  Empty,
  GetMovieScoreRequest,
  MovieData,
  MovieDatas,
  MovieScore,
  MovieServiceController,
  MovieServiceControllerMethods,
  RecommendMovieRequest,
  UpsertMovieScoreRequest,
  AverageMovieScore,
  GetCGVTheatersRequest,
  GetCGVTheatersByRegionRequest,
  CGVTheaterList,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
@MovieServiceControllerMethods()
export class MovieController implements MovieServiceController {
  constructor(private readonly movieService: MovieService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchMovies(request: Empty) {
    return await this.movieService.fetchMovies();
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
  async upsertMovieScore(
    request: UpsertMovieScoreRequest,
  ): Promise<MovieScore> | null {
    return await this.movieService.upsertMovieScore(request);
  }
  async getMovieScore(
    request: GetMovieScoreRequest,
  ): Promise<MovieScore> | null {
    return await this.movieService.getMovieScore(request);
  }
  async getAverageMovieScore(
    request: RecommendMovieRequest,
  ): Promise<AverageMovieScore> | null {
    return await this.movieService.getAverageMovieScore(request.movieCd);
  }

  async getCgvTheaters(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _request: GetCGVTheatersRequest,
  ): Promise<CGVTheaterList> {
    return await this.movieService.getCGVTheaters();
  }

  async getCgvTheatersByRegion(
    request: GetCGVTheatersByRegionRequest,
  ): Promise<CGVTheaterList> {
    return await this.movieService.getCGVTheatersByRegion(request.region);
  }
}
