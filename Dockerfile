# Этап сборки
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm@9.8.0

# Копируем только необходимые файлы для установки зависимостей
COPY . .

# Устанавливаем зависимости (будет использован кэш слоёв, если файлы не изменились)
RUN pnpm install

# Выполняем сборку проекта
RUN pnpm --filter frontend-v3 run build

# Финальный production-образ
FROM node:20-alpine

WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm@9.8.0

# Копируем только необходимые файлы из сборки
COPY --from=builder /app ./

# Удаляем dev-зависимости
RUN pnpm prune --production

EXPOSE 3000

CMD ["pnpm", "--filter", "frontend-v3", "start"]
