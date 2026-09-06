FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY public ./public
RUN npm ci
COPY . .
EXPOSE 3000