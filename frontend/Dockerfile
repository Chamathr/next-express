FROM node:16.13.2

WORKDIR /app

COPY . /app

# COPY package.json /app
# COPY package-lock.json /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]