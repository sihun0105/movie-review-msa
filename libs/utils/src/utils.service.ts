import { Injectable } from '@nestjs/common';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

@Injectable()
export class UtilsService {
  dateToTimestamp(date: Date): Timestamp {
    const timestamp = new Timestamp();
    timestamp.setSeconds(Math.floor(date.getTime() / 1000));
    timestamp.setNanos((date.getTime() % 1000) * 1000000);
    return timestamp;
  }
}
