import { BadRequestException } from '@nestjs/common';
import {
  imageMemoryMulterOptions,
  isAllowedImageFile,
} from './image-multer.options';

describe('imageMemoryMulterOptions', () => {
  it.each([
    ['animation.gif', 'image/gif'],
    ['photo.avif', 'image/avif'],
    ['live.heic', 'image/heic-sequence'],
    ['live.heif', 'image/heif-sequence'],
    ['IMG_0001.HEIC', 'application/octet-stream'],
  ])('accepts %s with %s', (originalname, mimetype) => {
    expect(isAllowedImageFile({ originalname, mimetype })).toBe(true);
  });

  it('does not trust an image extension with an executable MIME type', () => {
    expect(
      isAllowedImageFile({
        originalname: 'payload.gif',
        mimetype: 'application/x-msdownload',
      }),
    ).toBe(false);
  });

  it('returns a 400-class error for unsupported files', () => {
    const callback = jest.fn();

    imageMemoryMulterOptions.fileFilter(
      {} as never,
      { originalname: 'photo.dng', mimetype: 'image/x-adobe-dng' } as never,
      callback,
    );

    expect(callback).toHaveBeenCalledWith(expect.any(BadRequestException));
  });
});
