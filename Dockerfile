# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build project (skip TS type checking)
RUN npx vite build

# Stage 2: Serve static files
FROM node:18-alpine
WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Install serve globally
RUN npm install -g serve --no-optional && npm cache clean --force

# Set environment variable for port
ENV PORT=8080
EXPOSE 8080

# Start server
CMD ["sh", "-c", "serve -s dist -l $PORT"]