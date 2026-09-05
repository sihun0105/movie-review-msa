# 볼래 백엔드

NestJS 모노레포. `apps/api-gateway` REST → `proto` gRPC → 도메인 서비스 → Prisma/MySQL.

- 최신 `origin/develop`에서 작업 브랜치와 PR을 만든다. master/develop 직접 커밋 금지.
- 사용자 변경·데이터를 보존한다. 원본 폴더의 오래된 브랜치·생성물 변경을 새 작업에 섞지 않는다.
- 사용자 요청과 기존 권한을 우선한다. 일반적인 스킬 지침 때문에 승인·전체 검증을 반복하지 않는다.
- 계약은 proto와 DTO를 함께 확인한다. 빈 배열·nullable 값·기본값과 HTTP 오류 매핑을 유지한다.
- `prisma/mysql.schema.prisma`가 스키마의 근거다. 생성물은 직접 편집하지 않는다.
- Prisma 클라이언트·엔진은 Git에 저장하지 않는다. 새 checkout에서 `pnpm verify --prepare`로 생성한다. Docker 빌드는 자체 생성한다.
- 새로운 마이그레이션은 격리된 개발 DB에서 만든다. 검증 준비를 위해 운영 DB에 migrate/db push를 실행하지 않는다.
- 수정 소스는 기본 200줄 이하. 의미 없는 분할을 피하고 예외는 PR에 이유를 적는다.

## 검증

`packageManager`의 pnpm을 사용한다. 처음 한 번 `corepack pnpm install --frozen-lockfile`.

- `pnpm verify --help`: 사용법. `pnpm verify --prepare`: 필요한 proto/Prisma 생성.
- `pnpm verify --service <이름>`: 대상 서비스 타입 검사와 해당 테스트.
- `pnpm verify --test <파일>`: 관련 테스트만. `--service`와 조합 가능.
- `pnpm verify --all`: 모든 unit test와 앱·테스트 타입 검사. Jest는 실행용 변환만 담당하고 타입 검사는 tsc로 분리한다.
- 검증 스크립트 변경 시 `node --test scripts/verify.test.mjs`. `--all`과 `--test`는 함께 쓰지 않는다.
- 타입 오류가 필드 누락이면 스키마와 생성물 일치부터 확인한다. 동일 오류에 무작정 tsc를 반복하지 않는다.
- TTL·경쟁 조건은 격리 저장소로 확인한다. 기본 검증은 외부 DB·Redis에 접속하지 않는다.
- 인증은 정상 사용자·만료·비로그인·타인 자원 접근을 구분한다. HTTP 200만으로 쓰기 성공을 판단하지 않는다.

## 배포

작업 PR → develop → release PR → master. 실제 서비스명·배포 동작은 compose와 `.github/workflows/deploy.yml` 기준.
같은 서버의 프론트 배포와 직렬화한다. env 변경은 서비스 재생성이 필요하다.
배포가 승인된 작업은 run ID와 변경 API 응답까지 확인하고, 운영 수동 작업·남은 제약을 기록한다.
커밋은 간결한 한국어 제목과 기존 이모지/타입 표기. 사용하지 않은 모델의 co-author를 넣지 않는다.
