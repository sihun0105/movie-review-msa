import { Controller, Get } from '@nestjs/common';
import { HeroClientService } from './hero.client.service';

@Controller('/hero-client/v1')
export class HeroClientController {
  constructor(private readonly heroClientService: HeroClientService) {}

  @Get('/heroes')
  async test(): Promise<any> {
    const result = await this.heroClientService.findOne();
    return result;
  }
}
