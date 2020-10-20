FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js ./
COPY app.js ./
COPY logger ./logger
COPY database ./database
COPY api ./api

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]
