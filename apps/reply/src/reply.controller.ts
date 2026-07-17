import {
  CreateReplyDto,
  DeleteReplyDto,
  GetReplyDto,
  ReplyServiceController,
  ReplyServiceControllerMethods,
  ReactReplyDto,
  UpdateReplyDto,
} from '@app/common/protobuf';
import { Controller } from '@nestjs/common';
import { ReplyService } from './reply.service';

@Controller()
@ReplyServiceControllerMethods()
export class ReplyController implements ReplyServiceController {
  constructor(private readonly replyService: ReplyService) {}

  async createReply(createReplyDto: CreateReplyDto) {
    return await this.replyService.create(createReplyDto);
  }

  async updateReply(updateReplyDto: UpdateReplyDto) {
    return await this.replyService.update(updateReplyDto);
  }

  async deleteReply(deleteReplyDto: DeleteReplyDto) {
    return await this.replyService.delete(deleteReplyDto);
  }

  async getReply(getReplyDto: GetReplyDto) {
    return await this.replyService.getReplies(getReplyDto);
  }

  async reactReply(reactReplyDto: ReactReplyDto) {
    return await this.replyService.react(reactReplyDto);
  }
}
