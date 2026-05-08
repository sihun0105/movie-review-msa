import { Injectable } from '@nestjs/common';
import { MovieSyncService } from './movie-sync.service';
import { MovieReadService } from './movie-read.service';
import { MovieScoreService } from './movie-score.service';

@Injectable()
export class MovieService {
  constructor(
    private readonly syncService: MovieSyncService,
    private readonly readService: MovieReadService,
    private readonly scoreService: MovieScoreService,
  ) {}

  // Sync
  fetchMovies() {
    return this.syncService.fetchMovies();
  }

  // Read
  getMovieDatas() {
    return this.readService.getMovieDatas();
  }
  recommendMovies(movieCd: number) {
    return this.readService.recommendMovies(movieCd);
  }
  getMovieDetail(movieCd: number) {
    return this.readService.getMovieDetail(movieCd);
  }

  // Score
  upsertMovieScore(req: { movieCd: number; score: number; userId: number }) {
    return this.scoreService.upsertMovieScore(req);
  }
  getMovieScore(req: { movieCd: number; userId: number }) {
    return this.scoreService.getMovieScore(req);
  }
  getAverageMovieScore(movieCd: number) {
    return this.scoreService.getAverageMovieScore(movieCd);
  }
}
