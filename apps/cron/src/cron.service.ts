import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  constructor(private readonly movieService: MovieService) {}

  @Cron('0 0 * * *')
  getMoviedata() {
    console.log('Executing task once a day');
    const nowdate = new Date();
    const formattedDate =
      nowdate.getFullYear().toString() +
      (nowdate.getMonth() + 1).toString().padStart(2, '0') +
      (nowdate.getDate() - 1).toString().padStart(2, '0');
    this.movieService.fetchMovies(formattedDate);
  }
}
