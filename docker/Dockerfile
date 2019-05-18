FROM  node:11-alpine AS base
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY app /build