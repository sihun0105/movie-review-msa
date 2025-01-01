import { Test, TestingModule } from '@nestjs/testing';
import { MySQLPrismaService } from './mysql-prisma.service';

describe('PrismaService', () => {
  let service: MySQLPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MySQLPrismaService],
    }).compile();

    service = module.get<MySQLPrismaService>(MySQLPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
