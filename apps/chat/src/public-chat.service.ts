import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';

export interface PublicChatPayload {
  clientId?: string;
  userId?: number;
  nickName?: string;
  image?: string;
  message?: string;
}

export interface PublicChatMessageView {
  id: string;
  clientId?: string;
  userId?: number;
  nickName: string;
  image?: string;
  message: string;
  createdAt: string;
}

interface PublicChatRecord {
  id: string;
  clientId: string | null;
  userId: number | null;
  nickName: string;
  image: string | null;
  content: string;
  createdAt: Date;
}

interface PublicChatModel {
  create(args: { data: Record<string, unknown> }): Promise<PublicChatRecord>;
  findMany(args: {
    where: { deletedAt: null };
    orderBy: { createdAt: 'desc' };
    take: number;
  }): Promise<PublicChatRecord[]>;
}

@Injectable()
export class PublicChatService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async createMessage(
    data: PublicChatPayload,
  ): Promise<PublicChatMessageView | null> {
    const message = data.message?.trim().slice(0, 500);
    if (!message) return null;

    const userId = this.normalizeUserId(data.userId);
    const user = userId
      ? await this.prisma.user.findFirst({
          where: { id: userId, deletedAt: null },
          select: { id: true, nickname: true, image: true },
        })
      : null;

    const savedMessage = await this.publicChatModel.create({
      data: {
        clientId: data.clientId || null,
        userId: user?.id ?? null,
        nickName:
          user?.nickname || data.nickName?.trim().slice(0, 24) || '익명',
        image: user?.image || data.image?.trim() || null,
        content: message,
      },
    });

    return this.toView(savedMessage as PublicChatRecord);
  }

  async getHistory(): Promise<PublicChatMessageView[]> {
    const messages = await this.publicChatModel.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 80,
    });

    return (messages as PublicChatRecord[])
      .reverse()
      .map((message) => this.toView(message));
  }

  private get publicChatModel() {
    return this.prisma.publicChatMessage as unknown as PublicChatModel;
  }

  private toView(message: PublicChatRecord): PublicChatMessageView {
    return {
      id: message.id,
      clientId: message.clientId || undefined,
      userId: message.userId || undefined,
      nickName: message.nickName,
      image: message.image || undefined,
      message: message.content,
      createdAt: message.createdAt.toISOString(),
    };
  }

  private normalizeUserId(userId?: number) {
    const numericUserId = Number(userId);
    return Number.isInteger(numericUserId) && numericUserId > 0
      ? numericUserId
      : null;
  }
}
