# Builder stage — compile TS from /src → produces /dist
FROM node:22-alpine AS builder

WORKDIR /src

# Install all deps (dev+prod)
COPY package*.json ./
RUN npm ci

# Copy TS sources
COPY . .

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

# the compiled code
COPY --from=builder /src/dist ./dist

# static assets at project root (e.g. public/):
# COPY --from=builder /src/public ./public

EXPOSE 3000
# your start script: "node dist/server.js"
CMD ["npm", "start"]