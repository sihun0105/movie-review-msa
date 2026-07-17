import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import { DEFAULT_PROFILE_IMAGE_URL } from '@app/common/constants/profile';

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

interface CurrentUserProfile {
  id: number;
  nickname: string | null;
  image: string | null;
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

    return this.toView(savedMessage as PublicChatRecord, user);
  }

  async getHistory(): Promise<PublicChatMessageView[]> {
    const messages = await this.publicChatModel.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 80,
    });

    const records = messages as PublicChatRecord[];
    const userIds = [
      ...new Set(records.flatMap(({ userId }) => (userId ? [userId] : []))),
    ];
    const users = userIds.length
      ? await this.prisma.user.findMany({
          where: { id: { in: userIds }, deletedAt: null },
          select: { id: true, nickname: true, image: true },
        })
      : [];
    const usersById = new Map(users.map((user) => [user.id, user]));

    return records
      .reverse()
      .map((message) =>
        this.toView(
          message,
          message.userId ? usersById.get(message.userId) : null,
        ),
      );
  }

  private get publicChatModel() {
    return this.prisma.publicChatMessage as unknown as PublicChatModel;
  }

  private toView(
    message: PublicChatRecord,
    user?: CurrentUserProfile | null,
  ): PublicChatMessageView {
    const image = user
      ? user.image?.trim() || DEFAULT_PROFILE_IMAGE_URL
      : message.image?.trim();
    return {
      id: message.id,
      clientId: message.clientId || undefined,
      userId: message.userId || undefined,
      nickName: user?.nickname || message.nickName,
      image: image || undefined,
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
