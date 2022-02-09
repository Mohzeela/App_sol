FROM node:17-alpine3.14 as base

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]


# build with from base

FROM node:17-alpine3.14

WORKDIR /app

COPY --from=base /app /app
