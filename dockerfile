# get the base node.js image (slim version)
FROM node:lts-slim as build

# set a workir within the container and install the angular command-line-interface
WORKDIR /src
RUN npm install -g @angular/cli

# copy all package.json files and install
COPY package*.json .
RUN npm ci

# copy code and build the project
COPY . . 
RUN ng build --configuration=production

# set up the nginx-webserver for the access of the index.html and the website
FROM nginx:stable AS final
EXPOSE 80
COPY --from=build src/dist/raspberry-network-page/browser /usr/share/nginx/html