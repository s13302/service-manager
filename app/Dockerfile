FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js ./
COPY app.js ./
COPY api ./api

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]
