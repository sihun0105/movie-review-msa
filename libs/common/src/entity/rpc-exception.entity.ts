import {
  RpcExceptionCode,
  RpcExceptionData,
} from '@app/common/types/rpc-exception';

export function assertRpcExceptionData(data: any): RpcExceptionData {
  if (!isRpcExceptionData(data)) {
    throw new Error('Invalid RpcExceptionData');
  }
  return data;
}
export function convertRpcException(error: any): RpcExceptionData {
  if (!error || typeof error !== 'object') {
    return {
      code: 13,
      message: 'Internal server error',
    };
  }

  return {
    code: isRpcExceptionCode(error.code) ? error.code : 13,
    message:
      typeof error.message === 'string' ? error.message : 'Internal server error',
  };
}
export function isRpcExceptionData(data: any): data is RpcExceptionData {
  return (
    data &&
    isRpcExceptionCode(data.code) &&
    typeof data.message === 'string'
  );
}
export function isRpcExceptionCode(code: any): code is RpcExceptionCode {
  return Number.isInteger(code) && code >= 1 && code <= 16;
}
export function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}
export function mapRpcExceptionToStatusCode(
  exception: RpcExceptionCode,
): number {
  switch (exception) {
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
      assertNever(exception);
  }
}
