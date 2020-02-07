FROM node:12

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

COPY . .

# Test
RUN yarn test

# Build
RUN yarn build

EXPOSE 80

ENV NODE_ENV=production
CMD ["yarn", "start"]
