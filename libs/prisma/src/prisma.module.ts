import { Module } from '@nestjs/common';
import { MySQLPrismaService } from './mysql-prisma.service';

@Module({
  providers: [MySQLPrismaService],
  exports: [MySQLPrismaService],
})
export class PrismaModule {}
