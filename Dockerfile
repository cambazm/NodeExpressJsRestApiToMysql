FROM node:6.9.2
WORKDIR /usr/src/itx-mysql-restapi
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]