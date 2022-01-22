FROM node:16-alpine

# create app directory
WORKDIR /app/frontend

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ] 