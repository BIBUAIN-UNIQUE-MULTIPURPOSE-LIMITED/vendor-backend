vendor-backend/
├── src/
│ ├── config/
│ │ └── config.ts // Load and type environment variables
│ ├── controllers/
│ │ └── itemController.ts // CRUD logic for "items"
│ ├── middlewares/
│ │ └── errorHandler.ts // Global typed error handling middleware
│ ├── models/
│ │ └── item.ts // Define item type and in-memory storage
│ ├── routes/
│ │ └── itemRoutes.ts // Express routes for items
│ ├── app.ts // Express app configuration (middlewares, routes)
│ └── server.ts // Start the server
│ ├── services/
│ │ └── item.ts // Define item type and in-memory storage
│ ├── utils/
│ │ └── item.ts // Define item type and in-memory storage
├── .env // Environment variables
├── package.json // Project scripts, dependencies, etc.
├── tsconfig.json // TypeScript configuration
├── .eslintrc.js // ESLint configuration
└── .prettierrc // Prettier configuration

# Getting Started 

# To use Docker
Build image: ``` docker build -t ts-express-app . ```

List image: ``` docker images ```

List running service ``` docker ps ```

Run the image: ``` docker run -p 3000:3000 ts-express-app ```
// You can now access your server on http://localhost:3000

Remove images: ``` docker image remove ts-express-app ```

# Normal way
```
npm install

npm run dev
```
