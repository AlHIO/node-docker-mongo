FROM node:22-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD ["npm", "run", "start:dev"]