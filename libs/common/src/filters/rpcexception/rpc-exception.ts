import { RpcException } from '@nestjs/microservices';

export class CancelledException extends RpcException {
  constructor(message: string) {
    super({ message, code: 1 });
  }
}

export class UnknownException extends RpcException {
  constructor(message: string) {
    super({ message, code: 2 });
  }
}

export class InvalidArguementException extends RpcException {
  constructor(message: string) {
    super({ message, code: 3 });
  }
}

export class DeadlineExceededException extends RpcException {
  constructor(message: string) {
    super({ message, code: 4 });
  }
}

export class NotFoundException extends RpcException {
  constructor(message: string) {
    super({ message, code: 5 });
  }
}

export class AlreadyExistsException extends RpcException {
  constructor(message: string) {
    super({ message, code: 6 });
  }
}

export class PermissionDeniedException extends RpcException {
  constructor(message: string) {
    super({ message, code: 7 });
  }
}

export class ResourceExhaustedException extends RpcException {
  constructor(message: string) {
    super({ message, code: 8 });
  }
}

export class FailedPreconditionException extends RpcException {
  constructor(message: string) {
    super({ message, code: 9 });
  }
}

export class AbortedException extends RpcException {
  constructor(message: string) {
    super({ message, code: 10 });
  }
}

export class OutOfRangeException extends RpcException {
  constructor(message: string) {
    super({ message, code: 11 });
  }
}

export class UnimplementedException extends RpcException {
  constructor(message: string) {
    super({ message, code: 12 });
  }
}

export class InternalException extends RpcException {
  constructor(message: string) {
    super({ message, code: 13 });
  }
}

export class UnavailableException extends RpcException {
  constructor(message: string) {
    super({ message, code: 14 });
  }
}

export class DataLossException extends RpcException {
  constructor(message: string) {
    super({ message, code: 15 });
  }
}

export class UnauthenticatedException extends RpcException {
  constructor(message: string) {
    super({ message, code: 16 });
  }
}
