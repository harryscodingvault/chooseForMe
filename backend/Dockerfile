FROM node:16 as base

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

ENV NODE_PATH=./build

FROM base as production



