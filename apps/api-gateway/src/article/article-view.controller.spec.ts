import { BadRequestException } from '@nestjs/common';
import { ArticleViewController } from './article-view.controller';

describe('ArticleViewController', () => {
  const recordArticleView = jest.fn();
  const controller = new ArticleViewController({ recordArticleView } as any);

  beforeEach(() => jest.clearAllMocks());

  it('forwards a SHA-256 viewer key to the article service', async () => {
    recordArticleView.mockResolvedValue({ viewCount: 3, counted: true });
    const viewerKey = 'a'.repeat(64);

    const result = await controller.recordArticleView('4', { viewerKey });

    expect(recordArticleView).toHaveBeenCalledWith({
      articleId: 4,
      viewerKey,
    });
    expect(result).toEqual({ viewCount: 3, counted: true });
  });

  it('rejects a viewer key that is not a SHA-256 digest', () => {
    expect(() =>
      controller.recordArticleView('4', { viewerKey: 'raw-cookie-value' }),
    ).toThrow(BadRequestException);
    expect(recordArticleView).not.toHaveBeenCalled();
  });
});
