FROM node:12.17.0-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build
RUN ls -a

FROM node:12.17.0-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY /dist/* ./
RUN ls -a
RUN npm install pm2 -g
EXPOSE 3000
CMD ["node","server.js"]