FROM node:lts-alpine AS base

WORKDIR /home/next/app

COPY package*.json ./

RUN npm install

RUN npm audit fix

COPY . .

RUN npm run build

RUN npm prune --production

EXPOSE  3000 80 27017

CMD ["npm", "start"]