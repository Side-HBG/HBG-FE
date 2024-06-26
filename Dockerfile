FROM node:20.11.1-alpine3.19

ENV VUE_APP_API_URL="http://hgb-backend-service.hgb-backend.svc/api/v1/steam/pricev2?item_id="
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY vue/ ./
RUN npm install


EXPOSE 80

CMD ["npm","run","serve"]
