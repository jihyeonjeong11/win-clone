FROM node:21-alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk add --no-cache git

WORKDIR win-clone
COPY . .

RUN yarn
RUN yarn build

CMD yarn serve
