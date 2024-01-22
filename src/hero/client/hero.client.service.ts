import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { HeroesController } from '../heroes.controller';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class HeroClientService implements OnModuleInit {
  private heroesController: HeroesController;
  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit(): any {
    this.heroesController =
      this.client.getService<HeroesController>('HeroesService');
  }

  async findOne(): Promise<any> {
    const result = this.heroesController.findOne({ id: 3 });
    return result;
  }
}
