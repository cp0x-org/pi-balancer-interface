FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@9.8.0

COPY . .

RUN pnpm install

RUN pnpm --filter frontend-v3 run build

FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@9.8.0

COPY --from=builder /app ./

RUN pnpm prune --production

EXPOSE 3000

CMD ["pnpm", "--filter", "frontend-v3", "start"]
