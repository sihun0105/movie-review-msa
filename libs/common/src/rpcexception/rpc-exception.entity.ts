import { RpcExceptionCode, RpcExceptionData } from '../types';

export function assertRpcExceptionData(data: any): RpcExceptionData {
  if (!isRpcExceptionData(data)) {
    throw new Error('Invalid RpcExceptionData');
  }
  return data;
}
export function convertRpcException(error: any): RpcExceptionData {
  return {
    code: error.code,
    message: error.message,
  };
}
export function isRpcExceptionData(data: any): data is RpcExceptionData {
  return data.code !== undefined && data.message !== undefined;
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
