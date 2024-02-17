FROM oven/bun

WORKDIR /app

COPY app/package.json .
COPY app/bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
# COPY public public

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000
