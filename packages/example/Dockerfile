FROM mhart/alpine-node:10
WORKDIR /usr/src
COPY package.json /usr/src/
RUN yarn install
COPY . .
RUN yarn build
RUN mv ./public /public