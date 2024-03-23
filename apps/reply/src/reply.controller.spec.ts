import { Test, TestingModule } from '@nestjs/testing';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';

describe('ReplyController', () => {
  let replyController: ReplyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReplyController],
      providers: [ReplyService],
    }).compile();

    replyController = app.get<ReplyController>(ReplyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(replyController.getHello()).toBe('Hello World!');
    });
  });
});
