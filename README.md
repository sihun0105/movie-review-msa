## Description

Nest를 사용한 영화평론 프로젝트입니다.

- 주간 탑10개의 영화에 대하여 사용자들의 자유로운 평론이 가능합니다.
- 영화정보는 [한국영화진흥원](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)의 open APi 를 활용하여 "하루 1회" 데이터를 업데이트 합니다.
- [프론트엔드 레포지토리](https://github.com/sihun0105/movie-review-front/tree/develop)

<p align=center>
<img src='https://github.com/sihun0105/movie-review/assets/80196373/f9bcfc11-c038-47b6-88cc-032d96bce51e'>
</p>

## Getting Started

First, run the development server:

```bash
pnpm dev api-gateway
pnpm dev auth
pnpm dev movie
pnpm dev reply
pnpm dev user
pnpm dev movie
```

### generate proto

```

make generate_grpc_code
```
