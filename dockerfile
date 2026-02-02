# get the base node.js image (slim version)
FROM node:lts-slim as build

WORKDIR /src
RUN npm install -g @angular/cli

COPY package*.json .
RUN npm ci

COPY . . 
RUN ng build --configuration=production

FROM nginx:stable AS final
EXPOSE 80
COPY --from=build src/dist/raspberry-network-page/browser /usr/share/nginx/html