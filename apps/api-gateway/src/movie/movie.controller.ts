import { Controller, Get } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly replyService: MovieService) {}

  @Get('/')
  async get() {
    try {
      const getRepliesObservable = await this.replyService.getMovieDatas();
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
