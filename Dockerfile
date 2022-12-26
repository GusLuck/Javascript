# build environment
FROM node:16-alpine as build

# app dir
# RUN mkdir -p /app
WORKDIR /app

COPY . /app

# install dependencies
RUN npm install

RUN npm install -g nodemon

RUN npm cache clean --force

EXPOSE 8000


CMD npm run start