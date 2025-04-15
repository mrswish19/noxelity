FROM node:18

# Install necessary build tools
RUN apt-get update && apt-get install -y \
  g++ \
  make \
  libz-dev \
  cmake

WORKDIR /app
COPY . /app

RUN npm install

CMD ["npm", "start"]