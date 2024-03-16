import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let statusCode = this.mapRpcExceptionToStatusCode(exception.getError());
    if (!statusCode) {
      statusCode = 500;
    }
    response.status(statusCode).json({
      message: exception.message,
    });
  }

  private mapRpcExceptionToStatusCode(exception: any): number {
    switch (exception.code) {
      case 1:
        return 499; // Client Closed Request
      case 2: // UNKNOWN
        return 500; // Internal Server Error
      case 3: // INVALID_ARGUMENT
        return 400; // Bad Request
      case 4: // DEADLINE_EXCEEDED
        return 504; // Gateway Timeout
      case 5: // NOT_FOUND
        return 404; // Not Found
      case 6: // ALREADY_EXISTS
        return 409; // Conflict
      case 7: // PERMISSION_DENIED
        return 403; // Forbidden
      case 8: // RESOURCE_EXHAUSTED
        return 429; // Too Many Requests
      case 9: // FAILED_PRECONDITION
        return 400; // Bad Request
      case 10: // ABORTED
        return 409; // Conflict
      case 11: // OUT_OF_RANGE
        return 400; // Bad Request
      case 12: // UNIMPLEMENTED
        return 501; // Not Implemented
      case 13: // INTERNAL
        return 500; // Internal Server Error
      case 14: // UNAVAILABLE
        return 503; // Service Unavailable
      case 15: // DATA_LOSS
        return 500; // Internal Server Error
      case 16: // UNAUTHENTICATED
        return 401; // Unauthorized
      default:
        throw new Error('Unhandled RpcException');
    }
  }
}
