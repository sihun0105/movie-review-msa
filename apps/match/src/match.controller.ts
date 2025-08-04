import {
  MatchServiceController,
  MatchServiceControllerMethods,
  GetMatchPostsRequest,
  CreateMatchPostRequest,
  GetMatchPostRequest,
  UpdateMatchPostRequest,
  DeleteMatchPostRequest,
  ApplyToMatchRequest,
  GetMatchApplicationsRequest,
  UpdateApplicationStatusRequest,
  GetMyPostsRequest,
  GetMyApplicationsRequest,
  MatchPostResponse,
  SingleMatchPostResponse,
  MatchApplicationsResponse,
  CommonResponse,
  ApplicationResponse,
} from '@app/common/protobuf';

import { Controller } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller()
@MatchServiceControllerMethods()
export class MatchController implements MatchServiceController {
  constructor(private readonly matchService: MatchService) {}

  async getMatchPosts(
    request: GetMatchPostsRequest,
  ): Promise<MatchPostResponse> {
    return this.matchService.getMatchPosts(request);
  }

  async createMatchPost(
    request: CreateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    return this.matchService.createMatchPost(request);
  }

  async getMatchPost(
    request: GetMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    return this.matchService.getMatchPost(request);
  }

  async updateMatchPost(
    request: UpdateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    return this.matchService.updateMatchPost(request);
  }

  async deleteMatchPost(
    request: DeleteMatchPostRequest,
  ): Promise<CommonResponse> {
    return this.matchService.deleteMatchPost(request);
  }

  async applyToMatch(request: ApplyToMatchRequest): Promise<CommonResponse> {
    return this.matchService.applyToMatch(request);
  }

  async getMatchApplications(
    request: GetMatchApplicationsRequest,
  ): Promise<MatchApplicationsResponse> {
    return this.matchService.getMatchApplications(request);
  }

  async updateApplicationStatus(
    request: UpdateApplicationStatusRequest,
  ): Promise<ApplicationResponse> {
    return this.matchService.updateApplicationStatus(request);
  }

  async getMyPosts(request: GetMyPostsRequest): Promise<MatchPostResponse> {
    return this.matchService.getMyPosts(request);
  }

  async getMyApplications(
    request: GetMyApplicationsRequest,
  ): Promise<MatchApplicationsResponse> {
    return this.matchService.getMyApplications(request);
  }

  async getMyApplicationStatus(request: any): Promise<any> {
    return this.matchService.getMyApplicationStatus(request);
  }
}
