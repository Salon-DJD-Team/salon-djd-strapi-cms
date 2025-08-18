# ----------------------
# 1. Build Stage
# ----------------------
FROM node:18-alpine AS build

# Working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all source files
COPY . .

# Build Strapi admin panel (React build goes into /build)
RUN npm run build

# ----------------------
# 2. Production Stage
# ----------------------
FROM node:18-alpine

WORKDIR /app

# Copy only needed files from build stage
COPY --from=build /app /app

# Set environment
ENV NODE_ENV=production

# Expose Strapi default port
EXPOSE 1337

# Start Strapi server (admin + API)
CMD ["npm", "start"]
