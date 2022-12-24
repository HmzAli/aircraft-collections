FROM node:19-alpine3.16

WORKDIR /usr/src/app

# Only copy dependency files
COPY package*.json ./

RUN npm install

COPY . .

CMD npm run start:dev
