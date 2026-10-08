# Home Top Rated Movies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 실제 볼래 사용자 평점으로 정렬한 영화 큐레이션을 홈에 최대 6편 노출한다.

**Architecture:** movie-service가 삭제되지 않은 평점을 영화별로 집계하고 별도 공개 gRPC/REST API로 기존 `MovieData`를 반환한다. 프론트 서버 컴포넌트는 최대 12편을 조회해 현재 박스오피스와 중복을 제거하고 홈 ISR 안에서 렌더링한다.

**Tech Stack:** NestJS 10, Prisma 5, gRPC/Protocol Buffers, Next.js 13 App Router, Vitest, Jest

**Spec:** `docs/superpowers/specs/2026-10-08-home-top-rated-movies-design.md`

## Global Constraints

- REST API는 `GET /movie/top-rated?limit=12`, gRPC는 `GetTopRatedMovies`를 사용한다.
- `limit`은 기본 12, 최소 1, 최대 24로 정규화한다.
- soft-delete되지 않고 점수가 존재하는 사용자 평점만 집계한다.
- 평균 평점, 평가 수, 최신 개봉일, `movieCd` 순으로 안정적으로 정렬한다.
- 홈은 박스오피스 TOP 10과 중복을 제거하고 최대 6편만 노출한다.
- 빈 결과와 일시적 API 오류는 섹션만 숨기며 홈 전체를 실패시키지 않는다.
- 모든 수정·신규 소스 파일은 200줄 이하를 유지한다.

## Review Focus

- `limit`이 0, 음수, 24 초과 또는 숫자가 아닐 때 안전한 범위로 정규화되는지 확인한다.
- 삭제된 평점과 `null` 점수가 순위에 포함되지 않는지 확인한다.
- 집계에는 있으나 영화 레코드가 없는 코드가 결과를 깨뜨리지 않는지 확인한다.
- 동점 영화가 평가 수, 개봉일, `movieCd`로 항상 같은 순서를 유지하는지 확인한다.
- 운영 평점이 없거나 모두 TOP 10과 중복될 때 홈 섹션이 빈 껍데기를 노출하지 않는지 확인한다.

---

### Task 1: 백엔드 평점 집계 API

**Files:**
- Modify: `apps/movie/src/movie-catalog.service.spec.ts`
- Modify: `apps/movie/src/movie-catalog.service.ts`
- Modify: `proto/movie.proto`
- Generated: `proto/movie.ts`, `libs/common/src/protobuf/movie.ts`
- Modify: `apps/movie/src/movie.service.ts`
- Modify: `apps/movie/src/movie.controller.ts`
- Modify: `apps/api-gateway/src/movie/movie.service.ts`
- Modify: `apps/api-gateway/src/movie/movie.controller.ts`

**Interfaces:**
- Produces: `MovieCatalogService.getTopRated(limit: number): Promise<MovieData[]>`
- Produces: `GET /movie/top-rated?limit=<number>` returning `MovieDatas`

- [ ] **Step 1: Write failing service tests**

Add tests proving active-score filtering, deterministic ordering, missing-movie exclusion, empty results, and `limit` normalization to `1..24`.

- [ ] **Step 2: Verify RED**

Run: `pnpm test -- --runInBand --runTestsByPath apps/movie/src/movie-catalog.service.spec.ts`

Expected: FAIL because `getTopRated` does not exist.

- [ ] **Step 3: Implement the aggregate query**

Add `getTopRated(limit: number)` to `MovieCatalogService`. Use Prisma `movieScore.groupBy` with `{ deletedAt: null, score: { not: null } }`, fetch matching movies once with the existing count include, map with `convertMovieDataWithCounts`, sort deterministically, then slice.

- [ ] **Step 4: Verify GREEN**

Run the focused Jest command from Step 2.

Expected: PASS.

- [ ] **Step 5: Add transport contract and regenerate code**

Add `TopRatedMoviesRequest { int32 limit = 1; }`, `GetTopRatedMovies`, movie-service delegation/controller implementation, API Gateway delegation, and the public controller route. Run `pnpm verify --prepare`.

- [ ] **Step 6: Verify backend services**

Run: `pnpm verify --service movie --service api-gateway --test apps/movie/src/movie-catalog.service.spec.ts`

Expected: type checks and focused tests PASS.

- [ ] **Step 7: Commit backend feature**

Commit message: `✨ 고평점 영화 공개 API 추가`

### Task 2: 홈 고평점 영화 섹션

**Files:**
- Modify: `movie-review-front/src/config/movie-api-endpoint.ts`
- Modify: `movie-review-front/src/modules/movie/movie-datasource.ts`
- Modify: `movie-review-front/src/modules/movie/movie-repository.ts`
- Create: `movie-review-front/src/app/(root)/(routes)/(home)/components/top-rated-movies.presenter.ts`
- Create: `movie-review-front/src/app/(root)/(routes)/(home)/components/top-rated-movies.presenter.test.ts`
- Create: `movie-review-front/src/app/(root)/(routes)/(home)/components/top-rated-movies.tsx`
- Modify: `movie-review-front/src/app/(root)/(routes)/(home)/page.tsx`

**Interfaces:**
- Consumes: `GET /movie/top-rated?limit=12` returning `MovieDatas`
- Produces: `selectTopRatedMovies(movies, excludedIds, limit): Movie[]`
- Produces: `<TopRatedMovies excludeMovieIds={number[]} />`

- [ ] **Step 1: Write failing presenter tests**

Test that scored movies preserve backend order, TOP 10 IDs are excluded, at most 6 remain, and empty/all-excluded input returns `[]`.

- [ ] **Step 2: Verify RED**

Run: `pnpm test -- --run 'src/app/(root)/(routes)/(home)/components/top-rated-movies.presenter.test.ts'`

Expected: FAIL because the presenter module does not exist.

- [ ] **Step 3: Implement data access and presenter**

Add `getTopRatedMovies(limit = 12)` to endpoint, datasource, and repository. Normalize omitted `MovieData` to an empty array and convert entries through the existing movie mapper. Implement the pure selector.

- [ ] **Step 4: Implement the server component**

Render poster cards with title, `averageScore`, and `scoreCount`; link to `/movie/{id}`; hide on empty/error. Pass `top10.map(movie => movie.id)` from the home page.

- [ ] **Step 5: Verify GREEN and full frontend**

Run focused Vitest, then `pnpm verify --build`, Prettier check, `git diff --check`, and line counts.

Expected: all checks PASS and touched source files are at most 200 lines.

- [ ] **Step 6: Commit frontend feature**

Commit message: `✨ 홈에 고평점 영화 큐레이션 추가`

### Task 3: 순차 통합과 운영 검증

**Files:**
- Modify: `.claude/worklog.md`
- Modify: `docs/bollae-planning/work-checklist.md`

**Interfaces:**
- Consumes: Task 1 backend API and Task 2 frontend component
- Produces: backend then frontend production releases with recorded run IDs

- [ ] **Step 1: Review branch diffs**

Confirm only planned files changed, generated protobuf matches source, no secrets exist, and both worktrees are clean after commits.

- [ ] **Step 2: Merge and deploy backend**

Create task PR to backend `develop`, merge, create release PR to `master`, and wait for all service build/deploy jobs to succeed.

- [ ] **Step 3: Verify production API**

Run `GET https://bollae.kr/api/movie/top-rated?limit=12` and verify 200 plus ordered `MovieData` entries or a valid empty list.

- [ ] **Step 4: Merge and deploy frontend**

Only after backend verification, repeat task/release PR flow for the frontend and wait for deployment success.

- [ ] **Step 5: Verify production home and record work**

Confirm home remains HTTP/2 200 with ISR headers, card links match API results when data exists, then update checklist and worklog with PR/run IDs and any empty-data limitation.
