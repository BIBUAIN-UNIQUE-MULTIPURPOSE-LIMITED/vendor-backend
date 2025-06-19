vendor-backend/
|--prisma
| ├── schema.prisma // Define models inside schema.prisma file
│ │ 
| |── migrations/
|
├── src/
│ ├── config/
│ │ └── config.ts // Load and type environment variables
| |
| | └── database.ts 
|
│ ├── controllers/
│ │ └── <controllers files> // All controller files will be here
|
│ ├── middlewares/
│ │ └── errorHandler.ts // Global typed error handling middleware
| |
│ ├── routes/
│ │ └── <route files> // All routes files will be here
|
│ ├── services/
│ │ └── <service files>
|
│ ├── utils/
│ │ └─ <utils files>
|
│ ├── app.ts // Express app configuration (middlewares, routes)
| |
│ └── server.ts // Start the server
|
|-- test/
| |__ <test files>
|
├── .env // Environment variables
├── package.json // Project scripts, dependencies, etc.
├── tsconfig.json // TypeScript configuration



# Getting Started 

# To use Docker
Build image: ``` docker build -t bibuain-app . ```

List image: ``` docker images ```

List running service ``` docker ps ```

Stop running: docker stop <container-id> 
// or
docker kill <container-id>

Run the image: ``` docker run -p 3000:3000 bibuain-app ```
// You can now access your server on http://localhost:3000

Remove images: ``` docker image remove bibuain-app ```

# Normal way
```
npm install

npm run dev
```
Run prisma dev to start a local Prisma Postgres server.

npm run prisma:migrate    

Run prisma migrate dev to migrate your local Prisma Postgres database.
