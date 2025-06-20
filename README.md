# Vendor Backend

A Node.js backend service built with Express, TypeScript, and Prisma ORM.

## Project Structure

```
vendor-backend/
├── prisma/
│   ├── schema.prisma          # Database schema definitions
│   └── migrations/            # Database migration files
├── src/
│   ├── config/
│   │   ├── config.ts          # Environment variables configuration
│   │   └── database.ts        # Database connection setup
│   ├── controllers/           # Request handlers
│   ├── middlewares/
│   │   └── errorHandler.ts    # Global error handling middleware
│   ├── routes/                # API route definitions
│   ├── services/              # Business logic layer
│   ├── utils/                 # Utility functions
│   ├── app.ts                 # Express application configuration
│   └── server.ts              # Application entry point
├── test/                      # Test files
├── .env                       # Environment variables
├── package.json               # Project dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- Docker (optional)

## Docker Setup (Recommended)

### Quick Start with Docker Compose

1. **Copy the Docker Compose configuration**

   ```bash
   cp docker-compose.yml.example docker-compose.yml
   ```

2. **Configure environment variables**
   Update the following variables in your `docker-compose.yml`:

   ```yaml
   POSTGRES_USER=<username>
   POSTGRES_PASSWORD=<your_secure_password>
   POSTGRES_DB=<database_name>
   ```

3. **Build and start services**

   ```bash
   # Build the backend image
   docker-compose build vendor-backend

   # Generate initial migration
   docker-compose exec vendor-backend npx prisma migrate dev --name init

   # Start all services
   docker-compose up -d
   ```

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd vendor-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**

   ```bash
   cp .env.sample .env
   ```

   Update the `.env` file with your database credentials and other configuration values.

4. **Run database migrations**

   ```bash
   npm run prisma:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

### Service Overview

| Service        | Port | Description                   |
| -------------- | ---- | ----------------------------- |
| vendor-backend | 3000 | Node.js application server    |
| postgres       | 5432 | PostgreSQL database           |
| adminer        | 8081 | Database management interface |

### Access Points

- **Application**: http://localhost:3000
- **Database Admin**: http://localhost:8081
  - Server: `postgres`
  - Username: `$POSTGRES_USER`
  - Password: `$POSTGRES_PASSWORD`
  - Database: `$POSTGRES_DB`

### Docker Management Commands

```bash
# View logs
docker-compose logs vendor-backend -f

# Stop services
docker-compose down

# Remove containers and images
docker-compose down --rmi all
```

## Production Docker Build

For testing production builds locally:

```bash
# Build production image
docker build -t vendor-backend-prod .

# Run production container
docker run -p 3000:3000 vendor-backend-prod

# View running containers
docker ps

# Stop container
docker stop <container-id>

# Remove image
docker image remove vendor-backend-prod
```

### Debugging Build Issues

```bash
# Build with detailed output
docker build -t vendor-backend-prod . --no-cache --progress=plain
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run prisma:migrate # Run database migrations
npm test             # Run tests
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and ensure they pass
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Support

If you encounter any issues or have questions, please open reach out.
