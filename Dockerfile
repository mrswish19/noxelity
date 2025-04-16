FROM node:18

# Install system dependencies for native module builds
RUN apt-get update && apt-get install -y \
  python3 \
  g++ \
  make \
  cmake \
  libz-dev \
  && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to use Docker cache
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your code
COPY . .

# Expose the port if needed (optional)
# EXPOSE 3000

# Start your app
CMD ["node", "index.js"]
