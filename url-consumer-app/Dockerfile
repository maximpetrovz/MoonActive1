FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV API_URL=$API_URL

EXPOSE 3000

CMD ["node", "app.js"]