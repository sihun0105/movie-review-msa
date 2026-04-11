FROM node:18-alpine AS base
# Korean Fonts
RUN apk --update add fontconfig
RUN mkdir -p /usr/share/fonts/nanumfont
RUN wget http://cdn.naver.com/naver/NanumFont/fontfiles/NanumFont_TTF_ALL.zip
RUN unzip NanumFont_TTF_ALL.zip -d /usr/share/fonts/nanumfont
RUN fc-cache -f && rm -rf /var/cache/*

RUN apk add bash

ENV LANG=ko_KR.UTF-8 \
    LANGUAGE=ko_KR.UTF-8
RUN apk --no-cache add tzdata && \
        cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
        echo "Asia/Seoul" > /etc/timezone

WORKDIR /app
RUN npm i -g pnpm
RUN npm install -g prisma

WORKDIR /usr/src/app
COPY proto ./proto
COPY prisma ./prisma
CMD ["make", "generate_grpc_code"]
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

FROM base AS development 
ARG APP 
ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /usr/src/app 
COPY package.json pnpm-lock.yaml ./ 
RUN pnpm install
COPY . . 
RUN pnpm run build ${APP} 
RUN npx prisma generate

FROM base AS production 
ARG APP 
ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /usr/src/app 
COPY package.json pnpm-lock.yaml ./ 
RUN pnpm install
COPY --from=development /usr/src/app/dist ./dist 

ENV APP_MAIN_FILE=dist/apps/${APP}/src/main 
CMD node ${APP_MAIN_FILE}