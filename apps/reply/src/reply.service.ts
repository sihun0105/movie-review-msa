import {
  CreateReplyDto,
  DeleteReplyDto,
  GetReplyDto,
  ReactReplyDto,
  Reply,
  ReplyReactionResult,
  UpdateReplyDto,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { ReplyCommandService } from './reply-command.service';
import { ReplyQueryService } from './reply-query.service';
import { ReplyReactionService } from './reply-reaction.service';

@Injectable()
export class ReplyService {
  private readonly commands: ReplyCommandService;
  private readonly queries: ReplyQueryService;
  private readonly reactions: ReplyReactionService;

  constructor(prisma: MySQLPrismaService) {
    this.commands = new ReplyCommandService(prisma);
    this.queries = new ReplyQueryService(prisma);
    this.reactions = new ReplyReactionService(prisma);
  }

  create(dto: CreateReplyDto): Promise<Reply> {
    return this.commands.create(dto);
  }

  update(dto: UpdateReplyDto): Promise<Reply> {
    return this.commands.update(dto);
  }

  delete(dto: DeleteReplyDto): Promise<Reply> {
    return this.commands.delete(dto);
  }

  getReplies(dto: GetReplyDto) {
    return this.queries.getReplies(dto);
  }

  react(dto: ReactReplyDto): Promise<ReplyReactionResult> {
    return this.reactions.react(dto);
  }
}
