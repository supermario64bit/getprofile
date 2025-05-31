# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app
COPY pofology/package.json pofology/yarn.lock ./
RUN yarn install

COPY pofology ./
RUN yarn build

# Stage 2: Production
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app /app

ENV PORT=3005
EXPOSE 3005

CMD ["yarn", "start"]
