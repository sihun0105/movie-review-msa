# Article Comment Actions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 영화 댓글 액션 행을 정리하고 아티클 댓글에 반응, 1단계 대댓글, 삭제·수정 상태를 추가한다.

**Architecture:** 아티클 댓글 도메인에 자기참조와 전용 반응 모델을 추가하고 기존 Article gRPC 계약을 확장한다. 프론트는 공용 리뷰 카드와 ArticleRepository/BFF를 확장해 영화 댓글과 같은 UX를 제공한다.

**Tech Stack:** NestJS 10, gRPC/Protocol Buffers, Prisma/MySQL, Next.js 13 App Router, SWR, Vitest/Jest

## Global Constraints

- 기능 브랜치와 PR을 저장소별로 사용한다.
- 수정·신규 TypeScript/TSX 파일은 200줄 이하로 유지한다.
- 테스트를 먼저 작성하고 기대한 실패를 확인한 뒤 구현한다.
- 대댓글은 한 단계만 허용한다.
- 기존 아티클 본문 좋아요/싫어요 동작은 유지한다.

---

### Task 1: 아티클 댓글 데이터 및 서비스 계약

**Files:**
- Modify: `prisma/mysql.schema.prisma`
- Create: `prisma/migrations/20260717130000_add_article_comment_actions/migration.sql`
- Modify: `proto/article.proto`
- Modify: `libs/common/src/protobuf/article.ts`
- Test: `apps/article/src/article-comment.service.spec.ts`

**Interfaces:**
- Produces: `parentId`, `isEdited`, `replies`, reaction count/state fields and `ReactCommentRequest`

- [ ] **Step 1: Write failing service tests**

Add cases asserting same-reaction toggle removal, opposite-reaction switch, one-level reply validation,
deleted parent placeholder, and `isEdited: true` after update.

- [ ] **Step 2: Verify tests fail for missing contracts**

Run: `pnpm exec jest apps/article/src/article-comment.service.spec.ts --runInBand`
Expected: FAIL because reaction methods and nested fields do not exist.

- [ ] **Step 3: Add schema, migration, proto and focused services**

Add `ArticleCommentReaction`, self relation fields, response fields, and split query/reaction logic when
the existing service would exceed 200 lines.

- [ ] **Step 4: Generate Prisma/gRPC contracts and pass tests**

Run: `pnpm exec prisma generate --schema prisma/mysql.schema.prisma`
Run: `make generate_grpc_code`
Run: `pnpm exec jest apps/article/src/article-comment.service.spec.ts --runInBand`
Expected: PASS.

### Task 2: API Gateway article comment endpoints

**Files:**
- Modify: `apps/api-gateway/src/article/article.controller.ts`
- Modify: `apps/api-gateway/src/article/article.service.ts`
- Modify: `apps/article/src/article.controller.ts`
- Modify: `apps/article/src/article.service.ts`

**Interfaces:**
- Consumes: `ReactCommentRequest`, expanded `ListCommentsRequest`
- Produces: public optional-auth list endpoint and authenticated reaction endpoint

- [ ] **Step 1: Add controller contract assertions or compile-first fixture**

Assert list requests pass optional `userno` and reaction requests pass authenticated `userno`.

- [ ] **Step 2: Verify missing route failure**

Run focused Jest test or TypeScript compile and confirm the new client method is absent.

- [ ] **Step 3: Implement optional-auth list and reaction route**

Use `OptionalJwtAuthGuard` for GET comments and `JwtAuthGuard` for reaction writes.

- [ ] **Step 4: Verify backend types**

Run: `pnpm exec tsc -p apps/article/tsconfig.app.json --noEmit --incremental false`
Run: `pnpm exec tsc -p apps/api-gateway/tsconfig.app.json --noEmit --incremental false`
Expected: both exit 0.

### Task 3: Frontend repository and BFF

**Files:**
- Modify: `src/modules/article/article-datasource.ts`
- Modify: `src/modules/article/article-repository.ts`
- Test: `src/modules/article/article-repository.test.ts`
- Modify: `src/app/api/article/comment/[id]/route.ts`
- Test: `src/app/api/article/comment/[id]/route.test.ts`

**Interfaces:**
- Produces: `createComment(articleId, content, parentId?)`, `reactComment(commentId, reaction)` and nested `Reply`

- [ ] **Step 1: Write failing repository and BFF tests**

Assert nested fields survive conversion, parent ID reaches create, PATCH uses request auth token, and reaction
response is returned.

- [ ] **Step 2: Verify focused tests fail**

Run: `pnpm exec vitest run src/modules/article/article-repository.test.ts src/app/api/article/comment/[id]/route.test.ts`
Expected: FAIL for missing reaction and parent support.

- [ ] **Step 3: Implement minimal datasource/repository/BFF changes**

Use the existing request-based token helper and add only article-comment endpoint constants.

- [ ] **Step 4: Verify focused tests pass**

Run the same Vitest command. Expected: PASS.

### Task 4: Shared action row and article nested comment UI

**Files:**
- Modify: `src/components/dm/dm-review-card.tsx`
- Modify: `src/app/(root)/(routes)/articles/[id]/sections/comment-section.tsx`
- Create: `src/app/(root)/(routes)/articles/[id]/components/reply-comment-form.tsx`
- Create: `src/app/(root)/(routes)/articles/[id]/hooks/use-article-comment-reaction.ts`
- Modify: `src/app/(root)/(routes)/articles/[id]/hooks/use-create-article-comment.ts`

**Interfaces:**
- Consumes: nested `Reply`, create/react repository methods
- Produces: one-line `좋아요 · 싫어요 · 답글` action row and nested article replies

- [ ] **Step 1: Add component behavior tests where practical**

Assert the shared card renders the reply button in the same action container and deleted placeholders hide actions.

- [ ] **Step 2: Verify test failure**

Run the focused Vitest test. Expected: FAIL because reply is rendered outside the reaction row.

- [ ] **Step 3: Implement action row and article reply flow**

Render reaction buttons and top-level reply action in one flex row. Wire article parent/child reactions and reply form.

- [ ] **Step 4: Run complete verification**

Run: `pnpm exec vitest run`
Run: `pnpm lint`
Run: `pnpm build`
Expected: tests pass, lint has no new errors, build exits 0.

### Task 5: Delivery and production verification

**Files:**
- Modify after deployment: `.claude/worklog.md`

- [ ] **Step 1: Check diffs and 200-line limit**

Run `git diff --check` and `wc -l` over changed TypeScript/TSX files.

- [ ] **Step 2: Commit, push and create backend/frontend PRs**

Use the repository commit convention and merge backend before frontend.

- [ ] **Step 3: Watch both production Actions**

Require successful image build and SSH deploy for each repository.

- [ ] **Step 4: Verify production behavior**

Check `/articles/4`, article comment API fields, unauthorized reaction 401, and absence of page-wide horizontal overflow.
