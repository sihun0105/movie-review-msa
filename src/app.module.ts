import { Module } from '@nestjs/common';
import { HeroesController } from './hero/heroes.controller';
import { HeroClientModule } from './hero/client/hero.client.module';

@Module({
  imports: [HeroClientModule],
  controllers: [HeroesController],
})
export class AppModule {}
