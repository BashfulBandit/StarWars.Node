FROM node:22.2.0-bookworm AS base
WORKDIR /app
EXPOSE 8080

FROM base As build
COPY . .
RUN npm install; npm run build;

FROM base AS release
LABEL "org.opencontainers.image.source"="https://github.com/BashfulBandit/StarWars.Node"
COPY --from=build /app/dist .
HEALTHCHECK CMD curl --fail http://localhost:8080/api/healthz || exit 1
ENTRYPOINT [ "node", "./index.cjs" ]
