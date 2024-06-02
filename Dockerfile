FROM node:20.11.1-alpine3.19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80

CMD ["npm","run","serve"]
