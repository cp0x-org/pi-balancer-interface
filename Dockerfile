# ---------- BUILDER ----------
FROM node:24-alpine AS builder

WORKDIR /app
RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm run build


# ---------- RUNNER ----------
FROM node:24-alpine

WORKDIR /app
RUN npm install -g pnpm

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/pnpm-workspace.yaml ./

COPY --from=builder /app/apps ./apps

RUN pnpm install --prod --frozen-lockfile --ignore-scripts

CMD ["pnpm", "--filter", "frontend-v3", "start"]