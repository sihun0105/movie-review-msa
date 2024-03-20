import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RpcExceptionFilter } from '@app/common/rpcexception/rpc-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RpcExceptionFilter());
  await app.listen(process.env.API_GATEWAY_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
