FROM node:16 as base

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

ENV NODE_PATH=./build

CMD  ["node", "server.js"]




