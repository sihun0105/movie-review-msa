import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [MovieModule, ScheduleModule.forRoot()],
  providers: [CronService],
})
export class CronModule {}
