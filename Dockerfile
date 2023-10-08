FROM node:18.17.1 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production
COPY index.js ./

FROM gcr.io/
distroless/nodejs18-debian11

COPY --from=build /app /app

WORKDIR /app

EXPOSE 8080

CMD [ "index.js" ]
