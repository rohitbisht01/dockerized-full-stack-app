FROM node:18.16.0-alpine3.17
WORKDIR /react-vite-app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000/tcp
CMD [ "npm", "run", "dev"]