import { Module } from '@nestjs/common';
import { MySQLPrismaService } from './mysql-prisma.service';
import { PostgresPrismaService } from './postgres-prisma.service';

@Module({
  providers: [MySQLPrismaService, PostgresPrismaService],
  exports: [MySQLPrismaService, PostgresPrismaService],
})
export class PrismaModule {}
