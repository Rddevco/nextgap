FROM node:18-slim

#RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
