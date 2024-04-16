import {
  CreateReplyDto,
  DeleteReplyDto,
  GetReplyDto,
  REPLY_PACKAGE_NAME,
  REPLY_SERVICE_NAME,
  ReplyServiceClient,
  UpdateReplyDto,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ReplyService implements OnModuleInit {
  private replyService: ReplyServiceClient;
  constructor(
    @Inject(REPLY_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.replyService =
      this.client.getService<ReplyServiceClient>(REPLY_SERVICE_NAME);
  }

  create(createReplyDto: CreateReplyDto) {
    return this.replyService.createReply(createReplyDto);
  }
  update(updateReplyDto: UpdateReplyDto) {
    return this.replyService.updateReply(updateReplyDto);
  }
  delete(deleteReplyDto: DeleteReplyDto) {
    return this.replyService.deleteReply(deleteReplyDto);
  }
  getReplies(getRepliesDto: GetReplyDto) {
    return this.replyService.getReply(getRepliesDto);
  }
}
