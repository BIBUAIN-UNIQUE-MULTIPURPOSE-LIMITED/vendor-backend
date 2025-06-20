import http from 'http';
import app from './app';
import config from './config/config';
import { initializeSocket } from './socket/socketManager';

const server = http.createServer(app);

initializeSocket(server);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
