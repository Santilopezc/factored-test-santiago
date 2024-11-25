# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the frontend code into the container
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Serve the app using a lightweight server
RUN npm install -g serve

# Expose the port for the React app (default: 3000)
EXPOSE 3000

# Command to serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]
