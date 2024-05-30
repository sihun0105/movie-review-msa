import { Controller, Get } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MovieService } from './movie.service';
import { GetMovieSpecDecorator } from './decorator/get-movie-spec-decorator';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @GetMovieSpecDecorator('영화 데이터 조회', '영화 데이터 조회')
  @Get('/')
  async get() {
    try {
      const getRepliesObservable = await this.movieService.getMovieDatas();
      const data = await firstValueFrom(getRepliesObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }
}
