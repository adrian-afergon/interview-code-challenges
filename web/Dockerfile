FROM node:12.14.1-alpine3.10

EXPOSE 3000

RUN node --version

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .

CMD npm run start
