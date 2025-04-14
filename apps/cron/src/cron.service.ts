import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MovieService } from './movie/movie.service';

@Injectable()
export class CronService {
  constructor(private readonly movieService: MovieService) {
    this.movieService.fetchMoviedata();
  }

  @Cron('* 10 0 * * *')
  handleCron() {
    this.movieService.fetchMoviedata();
  }
}
