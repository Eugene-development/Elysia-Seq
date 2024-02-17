FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install --production

ENV HOST 0.0.0.0

ENV NODE_ENV production

CMD ["bun", "build", "./src/index.ts", "--outfile=bundle.js"]

EXPOSE 3000





