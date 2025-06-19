# Builder stage — compile TS from /src → produces /dist
FROM node:22-alpine AS builder

WORKDIR /src

# Install all deps (dev+prod)
COPY package*.json ./
RUN npm ci

# Copy source code AND Prisma schema
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the TypeScript code
RUN npm run build

# Runtime stage — only prod deps + compiled output
FROM node:22-alpine AS runtime

# ensure npm only pulls prod deps
ENV NODE_ENV=production

# work directory for runtime
WORKDIR /

# install production deps
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Copy Prisma schema for client generation
COPY prisma ./prisma

# Generate Prisma client in production
RUN npx prisma generate --no-engine

# Copy the compiled code
COPY --from=builder /src/dist ./dist

EXPOSE 3000

# Run migrations and start the app
CMD ["npm", "run", "start:prod"]