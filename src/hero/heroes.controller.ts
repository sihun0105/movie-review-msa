import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
export interface HeroById {
  id: number;
}
export interface Hero {
  id: number;
  name: string;
}

@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'sihun' },
    ];
    const result = items.find(({ id }) => id === data.id);
    return result;
  }
}
