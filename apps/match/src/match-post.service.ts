import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import {
  CreateMatchPostRequest,
  DeleteMatchPostRequest,
  GetMatchPostRequest,
  GetMatchPostsRequest,
  GetMyPostsRequest,
  UpdateMatchPostRequest,
  MatchPostResponse,
  SingleMatchPostResponse,
  CommonResponse,
} from '@app/common/protobuf';
import { MatchPostPresenter } from './match-post.presenter';
import {
  buildMatchPostWhere,
  isAvailablePost,
  paginate,
} from './match-post.filters';
import {
  isValidGenderCondition,
  normalizeGenderCondition,
} from './match-gender-condition';
import { MatchPostMineService } from './match-post-mine.service';

const POST_INCLUDE = {
  User: true,
  _count: {
    select: {
      MatchApplication: { where: { status: 'accepted' } },
    },
  },
} as const;

@Injectable()
export class MatchPostService {
  private readonly logger = new Logger(MatchPostService.name);
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly presenter: MatchPostPresenter,
    private readonly mine: MatchPostMineService,
  ) {}

  async getMatchPosts(
    request: GetMatchPostsRequest,
  ): Promise<MatchPostResponse> {
    const { page = 1, pageSize = 10, filter, userno } = request;
    const skip = (page - 1) * pageSize;
    if (filter === 'mine' && !userno) {
      return { matchPosts: [], hasNext: false };
    }
    const where = buildMatchPostWhere(request);

    if (filter === 'available') {
      const allPosts = await this.prisma.matchPost.findMany({
        where,
        include: POST_INCLUDE,
        orderBy: { createdAt: 'desc' },
      });
      const availablePosts = allPosts.filter(isAvailablePost);
      const pagePosts = paginate(availablePosts, skip, pageSize);

      return {
        matchPosts: await this.presenter.many(pagePosts),
        hasNext: availablePosts.length > skip + pageSize,
      };
    }

    const matchPosts = await this.prisma.matchPost.findMany({
      where,
      include: POST_INCLUDE,
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize + 1,
    });

    const hasNext = matchPosts.length > pageSize;
    if (hasNext) matchPosts.pop();

    return {
      matchPosts: await this.presenter.many(matchPosts),
      hasNext,
    };
  }

  async createMatchPost(
    request: CreateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const {
      title,
      content,
      movieTitle,
      theaterName,
      showTime,
      maxParticipants,
      genderCondition,
      location,
      userno,
    } = request;

    this.validateConfiguration(maxParticipants, genderCondition);

    const matchPost = await this.prisma.matchPost.create({
      data: {
        title,
        content,
        movieTitle,
        theaterName,
        showTime,
        maxParticipants,
        genderCondition: normalizeGenderCondition(genderCondition),
        location,
        userno,
      },
      include: POST_INCLUDE,
    });

    return { matchPost: await this.presenter.one(matchPost) };
  }

  async getMatchPost(
    request: GetMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const matchPost = await this.prisma.matchPost.findFirst({
      where: { id: request.matchId, deletedAt: null },
      include: POST_INCLUDE,
    });
    if (!matchPost) return { matchPost: null };
    return { matchPost: await this.presenter.one(matchPost) };
  }

  async updateMatchPost(
    request: UpdateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const { matchId, userno, ...data } = request;
    this.validateConfiguration(data.maxParticipants, data.genderCondition);
    const existingPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });

    if (!existingPost) throw new NotFoundException('Match post not found');
    if (existingPost.userno !== userno) {
      throw new ForbiddenException('You can only update your own posts');
    }

    const updatedPost = await this.prisma.matchPost.update({
      where: { id: matchId },
      data: {
        ...data,
        genderCondition: normalizeGenderCondition(data.genderCondition),
        updatedAt: new Date(),
      },
      include: POST_INCLUDE,
    });

    return { matchPost: await this.presenter.one(updatedPost) };
  }

  async deleteMatchPost(
    request: DeleteMatchPostRequest,
  ): Promise<CommonResponse> {
    const { matchId, userno } = request;
    const existingPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });

    if (!existingPost) throw new NotFoundException('Match post not found');
    if (existingPost.userno !== userno) {
      throw new ForbiddenException('You can only delete your own posts');
    }

    await this.prisma.matchPost.update({
      where: { id: matchId },
      data: { deletedAt: new Date() },
    });

    return { success: true, message: 'Match post deleted successfully' };
  }

  async getMyPosts(request: GetMyPostsRequest): Promise<MatchPostResponse> {
    return this.mine.get(request);
  }

  private validateConfiguration(maxParticipants: number, gender?: string) {
    if (maxParticipants < 2) {
      throw new BadRequestException('A match requires at least two people');
    }
    if (!isValidGenderCondition(gender)) {
      throw new BadRequestException('A gender condition must be selected');
    }
  }
}
