import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RpcExceptionFilter } from '@app/common/filters/rpcexception/rpc-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, LogLevel } from '@nestjs/common';
import './utils/instrument';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: logLevels,
  });

  app.useGlobalFilters(new RpcExceptionFilter());
  /**Swaager설정 */
  const config = new DocumentBuilder()
    .setTitle('moview API')
    .setDescription('moview API 문서입니다.')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /**CORS 설정 */
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map((o) =>
    o.trim(),
  ) ?? [];
  app.enableCors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    preflightContinue: false,
  });
  await app.listen(3030);
  new Logger('Bootstrap').log(`Apigateway is running on: ${await app.getUrl()}`);
}
bootstrap();
