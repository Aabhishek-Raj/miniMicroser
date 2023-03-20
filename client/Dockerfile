FROM node:alpine

WORKDIR /pp
COPY package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm","run", "dev" ]