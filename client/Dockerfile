# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the port and start the app
EXPOSE 5173
CMD ["npm", "run", "dev"]
