FROM node:17-alpine3.14 as base

WORKDIR /app

COPY . .

ENTRYPOINT ["npm", "start"]


# build with from base

FROM node:17-alpine3.14

COPY --from=base /app .
