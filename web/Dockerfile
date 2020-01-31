FROM node:12.14.1-alpine3.10

EXPOSE 3000

RUN node --version

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

CMD [ "npm", "start" ]
