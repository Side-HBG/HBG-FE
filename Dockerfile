FROM node:20.11.1-alpine3.19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY vue/ ./
RUN npm install


EXPOSE 80

CMD ["npm","run","serve"]
