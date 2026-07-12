import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const KST_OFFSET_MS = 9 * HOUR_MS;

function getKstMonthStart(date: Date, monthOffset = 0) {
  const kst = new Date(date.getTime() + KST_OFFSET_MS);
  return new Date(
    Date.UTC(kst.getUTCFullYear(), kst.getUTCMonth() + monthOffset, 1) -
      KST_OFFSET_MS,
  );
}

function getKstDayStart(date: Date) {
  const kst = new Date(date.getTime() + KST_OFFSET_MS);
  return new Date(
    Date.UTC(kst.getUTCFullYear(), kst.getUTCMonth(), kst.getUTCDate()) -
      KST_OFFSET_MS,
  );
}

function getKstMonthLabel(date: Date) {
  const kst = new Date(date.getTime() + KST_OFFSET_MS);
  return `${kst.getUTCFullYear()}-${String(kst.getUTCMonth() + 1).padStart(
    2,
    '0',
  )}`;
}

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async touchUser(userId: number) {
    const threshold = new Date(Date.now() - HOUR_MS);
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        deletedAt: null,
        OR: [{ lastActiveAt: null }, { lastActiveAt: { lt: threshold } }],
      },
      data: { lastActiveAt: new Date() },
    });
  }

  async getSummary() {
    const now = new Date();
    const todayStart = getKstDayStart(now);
    const monthStart = getKstMonthStart(now);
    const seriesStart = getKstMonthStart(now, -5);
    const [
      totalUsers,
      signupsThisMonth,
      activeToday,
      active7d,
      active30d,
      signups,
    ] = await Promise.all([
      this.prisma.user.count({ where: { deletedAt: null } }),
      this.prisma.user.count({
        where: { deletedAt: null, createdAt: { gte: monthStart } },
      }),
      this.countActiveSince(todayStart),
      this.countActiveSince(new Date(now.getTime() - 7 * DAY_MS)),
      this.countActiveSince(new Date(now.getTime() - 30 * DAY_MS)),
      this.prisma.user.findMany({
        where: { deletedAt: null, createdAt: { gte: seriesStart } },
        select: { createdAt: true },
      }),
    ]);

    const monthlySignups = Array.from({ length: 6 }, (_, index) => {
      const month = getKstMonthStart(now, index - 5);
      return { month: getKstMonthLabel(month), count: 0 };
    });
    const monthCounts = new Map(monthlySignups.map((item) => [item.month, 0]));
    signups.forEach(({ createdAt }) => {
      const label = getKstMonthLabel(createdAt);
      monthCounts.set(label, (monthCounts.get(label) ?? 0) + 1);
    });
    monthlySignups.forEach((item) => {
      item.count = monthCounts.get(item.month) ?? 0;
    });

    return {
      generatedAt: now.toISOString(),
      totalUsers,
      signupsThisMonth,
      activeToday,
      active7d,
      active30d,
      monthlySignups,
    };
  }

  private countActiveSince(since: Date) {
    return this.prisma.user.count({
      where: { deletedAt: null, lastActiveAt: { gte: since } },
    });
  }
}
