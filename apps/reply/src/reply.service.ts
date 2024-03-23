import { Injectable } from '@nestjs/common';

@Injectable()
export class ReplyService {
  getHello(): string {
    return 'Hello World!';
  }
}
