import {
  MATCH_PACKAGE_NAME,
  MATCH_SERVICE_NAME,
  MatchService as MatchServiceClient,
  GetMatchPostsRequest,
  CreateMatchPostRequest,
  GetMatchPostRequest,
  UpdateMatchPostRequest,
  DeleteMatchPostRequest,
  ApplyToMatchRequest,
  GetMatchApplicationsRequest,
  UpdateApplicationStatusRequest,
} from '@app/common/protobuf';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class MatchService implements OnModuleInit {
  private matchService: MatchServiceClient;
  constructor(
    @Inject(MATCH_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.matchService =
      this.client.getService<MatchServiceClient>(MATCH_SERVICE_NAME);
  }

  async getMatchPosts(request: GetMatchPostsRequest) {
    return this.matchService.getMatchPosts(request);
  }

  async createMatchPost(request: CreateMatchPostRequest) {
    return this.matchService.createMatchPost(request);
  }

  async getMatchPost(request: GetMatchPostRequest) {
    return this.matchService.getMatchPost(request);
  }

  async updateMatchPost(request: UpdateMatchPostRequest) {
    return this.matchService.updateMatchPost(request);
  }

  async deleteMatchPost(request: DeleteMatchPostRequest) {
    return this.matchService.deleteMatchPost(request);
  }

  async applyToMatch(request: ApplyToMatchRequest) {
    return this.matchService.applyToMatch(request);
  }

  async getMatchApplications(request: GetMatchApplicationsRequest) {
    return this.matchService.getMatchApplications(request);
  }

  async updateApplicationStatus(request: UpdateApplicationStatusRequest) {
    return this.matchService.updateApplicationStatus(request);
  }
}
