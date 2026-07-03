import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MovieService } from './movie/movie.service';

@Injectable()
export class CronService {
  constructor(private readonly movieService: MovieService) {}

  @Cron('0 10 0 * * *', { timeZone: 'Asia/Seoul' })
  handleDailyMovieSync() {
    void this.runMovieSync();
  }

  @Cron('0 0 1,3,7 * * *', { timeZone: 'Asia/Seoul' })
  handleMovieSyncRetry() {
    void this.runMovieSync();
  }

  private async runMovieSync() {
    await this.movieService.fetchMoviedata();
  }
}
