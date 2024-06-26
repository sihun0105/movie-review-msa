import {
  assertRpcExceptionData,
  convertRpcException,
  mapRpcExceptionToStatusCode,
} from '@app/common/entity';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const errorData = convertRpcException(exception.getError());
    const rpcException = assertRpcExceptionData(errorData);
    const statusCode = mapRpcExceptionToStatusCode(rpcException.code);
    response.status(statusCode).json({
      message: exception.message,
    });
  }
}
