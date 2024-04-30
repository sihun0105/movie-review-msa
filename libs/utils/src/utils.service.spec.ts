import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let utilsService: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    utilsService = module.get<UtilsService>(UtilsService);
  });

  describe('dateToTimestamp', () => {
    it('should convert a date to a Timestamp object', () => {
      const date = new Date('2022-01-01T00:00:00Z');
      const expectedTimestamp = {
        seconds: Math.floor(date.getTime() / 1000),
        nanos: (date.getTime() % 1000) * 1000000,
      };

      const timestamp = utilsService.dateToTimestamp(date);

      expect(timestamp.getSeconds()).toEqual(expectedTimestamp.seconds);
      expect(timestamp.getNanos()).toEqual(expectedTimestamp.nanos);
    });
  });
});
