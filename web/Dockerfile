# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

COPY . /app/

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --production
RUN npm install -g @vue/cli

# start app
CMD ["npm", "run", "serve"]