# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /client

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the React application
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the React application
CMD ["serve", "-s", "build", "-l", "3000"]
