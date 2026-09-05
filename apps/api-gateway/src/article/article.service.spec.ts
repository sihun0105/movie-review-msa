import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import {
  ARTICLE_PACKAGE_NAME,
  ARTICLE_SERVICE_NAME,
} from '@app/common/protobuf';
import { of } from 'rxjs';

describe('ArticleService', () => {
  let service: ArticleService;
  const getArticle = jest.fn();
  const getService = jest.fn(() => ({ getArticle }));

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        { provide: ARTICLE_PACKAGE_NAME, useValue: { getService } },
      ],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
    await module.init();
  });

  it('resolves the article gRPC service during module initialization', () => {
    expect(getService).toHaveBeenCalledWith(ARTICLE_SERVICE_NAME);
  });

  it('forwards the request and preserves the gRPC observable', async () => {
    const request = { id: 42 };
    const response = of({ article: { id: 42 } });
    getArticle.mockReturnValue(response);

    await expect(service.getArticle(request)).resolves.toBe(response);
    expect(getArticle).toHaveBeenCalledWith(request);
  });
});
