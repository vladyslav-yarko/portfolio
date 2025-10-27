ARG NODE_VERSION=20-alpine


###
FROM node:${NODE_VERSION} AS base


LABEL maintainer="vladyslav-yarko"
LABEL org.opencontainers.image.source="https://github.com/vladyslav-yarko/portfolio"
# LABEL org.opencontainers.image.description=description


WORKDIR /app


###
FROM base AS dev

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000


ENTRYPOINT [ "npm" ]
CMD [ "run", "dev" ]
