FROM node:20.11.1-alpine3.19

ARG VUE_APP_API_URL
#ENV VUE_APP_API_URL="http://192.168.50.199:8081/api/v1/steam/pricev2?item_id="
ENV VUE_APP_API_URL=${VUE_APP_API_URL}
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY vue/ ./
RUN npm install


EXPOSE 80

CMD ["npm","run","serve"]
