import { GUARDS_METADATA } from '@nestjs/common/constants';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { UserController } from './user.controller';

describe('UserController activity summary', () => {
  const activityService = {
    getSummary: jest.fn(),
    getActivity: jest.fn(),
    deleteRating: jest.fn(),
  };
  const controller = new UserController(
    {} as never,
    {} as never,
    activityService as never,
  );

  beforeEach(() => jest.clearAllMocks());

  it('uses the authenticated user id', async () => {
    activityService.getSummary.mockResolvedValue({ articleCount: 1 });

    await expect(
      controller.getActivitySummary({ user: { userId: 4 } }),
    ).resolves.toEqual({ articleCount: 1 });
    expect(activityService.getSummary).toHaveBeenCalledWith(4);
  });

  it('is protected by the JWT guard', () => {
    const guards = Reflect.getMetadata(
      GUARDS_METADATA,
      controller.getActivitySummary,
    );

    expect(guards).toContain(JwtAuthGuard);
  });

  it('uses the signed-in user for a paged activity list', async () => {
    activityService.getActivity.mockResolvedValue({ items: [] });

    await controller.getActivity('comments', '2', '5', { user: { userId: 4 } });

    expect(activityService.getActivity).toHaveBeenCalledWith(
      4,
      'comments',
      2,
      5,
    );
  });

  it('uses the signed-in user when deleting a rating', async () => {
    activityService.deleteRating.mockResolvedValue({ success: true });

    await controller.deleteActivityRating('20233219', {
      user: { userId: 4 },
    });

    expect(activityService.deleteRating).toHaveBeenCalledWith(4, 20233219);
  });
});
