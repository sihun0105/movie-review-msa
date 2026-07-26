import { GUARDS_METADATA } from '@nestjs/common/constants';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { UserController } from './user.controller';

describe('UserController activity summary', () => {
  const activityService = { getSummary: jest.fn() };
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
});
