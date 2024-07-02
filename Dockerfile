FROM node:22.2-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT ["top", "-b"]

FROM nginx:1.27.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html
