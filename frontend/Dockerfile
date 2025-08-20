FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

# set port variable
ENV PORT=3000

# expose the port
EXPOSE 3000