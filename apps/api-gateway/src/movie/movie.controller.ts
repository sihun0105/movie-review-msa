import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MovieService } from './movie.service';
import { GetMovieSpecDecorator } from './decorator/get-movie-spec-decorator';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { RateLimitGuard } from '@app/common/guards/rateLimit/rate-limit.guard';

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
  @Get(':movieCd')
  async getMovieDetail(@Param('movieCd') movieCd: string) {
    try {
      const getRepliesObservable = await this.movieService.getMovieDetail(
        +movieCd,
      );
      const data = await firstValueFrom(getRepliesObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }
  @Post('/score/:movieCd')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
  async upsertMovieScore(
    @Param('movieCd') movieCd: string,
    @Body() score: { score: number },
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    try {
      const getRepliesObservable = await this.movieService.upsertMovieScore({
        userNumber,
        movieCd: +movieCd,
        score: score.score,
      });
      const data = await firstValueFrom(getRepliesObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }
  @Get('/score/:movieCd')
  @UseGuards(JwtAuthGuard, RateLimitGuard)
  async getMovieScore(@Param('movieCd') movieCd: string, @Req() req) {
    const userNumber = req.user.userId;
    try {
      const getRepliesObservable = await this.movieService.getMovieScore({
        userNumber,
        movieCd: +movieCd,
      });
      const data = await firstValueFrom(getRepliesObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }
  @Get('/score/average/:movieCd')
  async getAverageMovieScore(@Param('movieCd') movieCd: string) {
    try {
      const getRepliesObservable = await this.movieService.getAverageMovieScore(
        {
          movieCd: +movieCd,
        },
      );
      const data = await firstValueFrom(getRepliesObservable);
      return data;
    } catch (error) {
      throw new RpcException({
        code: error.code,
        message: error.details,
      });
    }
  }

  @GetMovieSpecDecorator('추천 영화 조회', '추천 영화 조회')
  @Get('/recommend/:movieCd')
  async recommendMovies(@Param('movieCd') movieCd: string) {
    try {
      const getRepliesObservable = await this.movieService.recommendMovies(
        +movieCd,
      );
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
