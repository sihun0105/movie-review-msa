import { ArticleViewService, toKstDate } from './article-view.service';

describe('ArticleViewService', () => {
  const article = { id: 4, view_count: 7 };
  let transaction: any;
  let prisma: any;

  beforeEach(() => {
    transaction = {
      articleView: { createMany: jest.fn() },
      article: {
        update: jest.fn(),
        findUniqueOrThrow: jest.fn(),
      },
    };
    prisma = {
      article: { findFirst: jest.fn().mockResolvedValue(article) },
      $transaction: jest.fn((callback) => callback(transaction)),
    };
  });

  it('increments the count for the first view of the KST day', async () => {
    transaction.articleView.createMany.mockResolvedValue({ count: 1 });
    transaction.article.update.mockResolvedValue({ view_count: 8 });
    const service = new ArticleViewService(prisma);

    const result = await service.recordView(
      { articleId: 4, viewerKey: 'a'.repeat(64) },
      new Date('2026-07-20T15:30:00.000Z'),
    );

    expect(transaction.articleView.createMany).toHaveBeenCalledWith({
      data: {
        articleId: 4,
        viewerKey: 'a'.repeat(64),
        viewedOn: new Date('2026-07-21T00:00:00.000Z'),
      },
      skipDuplicates: true,
    });
    expect(result).toEqual({ viewCount: 8, counted: true });
  });

  it('keeps the count for a duplicate view on the same KST day', async () => {
    transaction.articleView.createMany.mockResolvedValue({ count: 0 });
    transaction.article.findUniqueOrThrow.mockResolvedValue(article);
    const service = new ArticleViewService(prisma);

    const result = await service.recordView({
      articleId: 4,
      viewerKey: 'b'.repeat(64),
    });

    expect(transaction.article.update).not.toHaveBeenCalled();
    expect(result).toEqual({ viewCount: 7, counted: false });
  });

  it('converts timestamps to the Asia/Seoul calendar date', () => {
    expect(toKstDate(new Date('2026-07-20T14:59:59.000Z'))).toEqual(
      new Date('2026-07-20T00:00:00.000Z'),
    );
    expect(toKstDate(new Date('2026-07-20T15:00:00.000Z'))).toEqual(
      new Date('2026-07-21T00:00:00.000Z'),
    );
  });
});
