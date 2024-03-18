FROM node:18.16.0-alpine3.17
COPY . /home/app
WORKDIR /home/app
RUN npm install
COPY . .
EXPOSE 4000/tcp
CMD [ "npm", "start"]