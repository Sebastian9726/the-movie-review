# syntax=docker/dockerfile:1

FROM node:16.14.2-alpine AS base

WORKDIR /app

COPY [ "package.json", "npm.lock*", "./" ]

FROM base AS dev
ENV NODE_ENV=dev
RUN npm install --frozen-lockfile
COPY . .
CMD [ "npm", "start:dev" ]

FROM dev AS test
ENV NODE_ENV=test
CMD [ "npm", "test" ]

FROM test AS test-cov
CMD [ "npm", "test:cov" ]

FROM test AS test-watch
ENV GIT_WORK_TREE=/app GIT_DIR=/app/.git
RUN apk add git
CMD [ "npm", "test:watch" ]

FROM base AS prod
ENV NODE_ENV=production
RUN npm install --frozen-lockfile --production
COPY . .
RUN npm global add @nestjs/cli
RUN npm build
CMD [ "npm", "start:prod" ]