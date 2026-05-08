import { Injectable } from '@nestjs/common';
import {
  ApplyToMatchRequest,
  CreateMatchPostRequest,
  DeleteMatchPostRequest,
  GetMatchApplicationsRequest,
  GetMatchPostRequest,
  GetMatchPostsRequest,
  GetMyApplicationsRequest,
  GetMyPostsRequest,
  UpdateApplicationStatusRequest,
  UpdateMatchPostRequest,
} from '@app/common/protobuf';
import { MatchPostService } from './match-post.service';
import { MatchApplicationService } from './match-application.service';

@Injectable()
export class MatchService {
  constructor(
    private readonly postService: MatchPostService,
    private readonly applicationService: MatchApplicationService,
  ) {}

  // Posts
  getMatchPosts(req: GetMatchPostsRequest) {
    return this.postService.getMatchPosts(req);
  }
  createMatchPost(req: CreateMatchPostRequest) {
    return this.postService.createMatchPost(req);
  }
  getMatchPost(req: GetMatchPostRequest) {
    return this.postService.getMatchPost(req);
  }
  updateMatchPost(req: UpdateMatchPostRequest) {
    return this.postService.updateMatchPost(req);
  }
  deleteMatchPost(req: DeleteMatchPostRequest) {
    return this.postService.deleteMatchPost(req);
  }
  getMyPosts(req: GetMyPostsRequest) {
    return this.postService.getMyPosts(req);
  }

  // Applications
  applyToMatch(req: ApplyToMatchRequest) {
    return this.applicationService.applyToMatch(req);
  }
  getMatchApplications(req: GetMatchApplicationsRequest) {
    return this.applicationService.getMatchApplications(req);
  }
  updateApplicationStatus(req: UpdateApplicationStatusRequest) {
    return this.applicationService.updateApplicationStatus(req);
  }
  getMyApplications(req: GetMyApplicationsRequest) {
    return this.applicationService.getMyApplications(req);
  }
  getMyApplicationStatus(req: { matchId: string; userno: number }) {
    return this.applicationService.getMyApplicationStatus(req);
  }
}
