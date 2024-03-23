import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RpcExceptionFilter } from '@app/common/rpcexception/rpc-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RpcExceptionFilter());
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
