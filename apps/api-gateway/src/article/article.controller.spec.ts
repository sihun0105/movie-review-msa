import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { UploadService } from '../upload/upload.service';

describe('ArticleController', () => {
  let controller: ArticleController;
  const articleService = { getArticle: jest.fn(), listArticles: jest.fn() };
  const uploadService = { uploadImage: jest.fn() };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        { provide: ArticleService, useValue: articleService },
        { provide: UploadService, useValue: uploadService },
      ],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('converts the article id and returns the service response', async () => {
    const response = { article: { id: 42 } };
    articleService.getArticle.mockResolvedValue(response);

    await expect(controller.getArticle('42')).resolves.toBe(response);
    expect(articleService.getArticle).toHaveBeenCalledWith({ id: 42 });
  });

  it('defaults missing pagination values', async () => {
    await controller.listArticles(undefined, undefined);

    expect(articleService.listArticles).toHaveBeenCalledWith({
      page: 1,
      pageSize: 10,
    });
  });

  it('uploads the first file to the articles folder and returns its URL', async () => {
    const file = { originalname: 'poster.png' } as Express.Multer.File;
    uploadService.uploadImage.mockResolvedValue('/uploads/articles/poster.png');

    await expect(controller.uploadArticleImage([file])).resolves.toEqual({
      url: '/uploads/articles/poster.png',
    });
    expect(uploadService.uploadImage).toHaveBeenCalledWith({
      file,
      folder: 'articles',
    });
  });
});
