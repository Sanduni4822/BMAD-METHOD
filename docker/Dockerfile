# Step 1: Use official Node.js image as base
FROM node:16

# Step 2: Set the working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (or npm-shrinkwrap.json)
# This helps in caching dependencies during subsequent builds
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the port the app will run on
EXPOSE 5000

# Step 7: Command to run the application
CMD ["npm", "run", "start"]
