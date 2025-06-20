import { Server as SocketIOServer } from 'socket.io';
import http from 'http';

let io: SocketIOServer | null = null;

export const initializeSocket = (server: http.Server) => {
  io = new SocketIOServer(server, {
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  // socket.io event handlers
  io.on('connection', (socket) => {
    console.log(`🔌 client connected [id=${socket.id}]`);

    // Item created event
    socket.on('itemCreated', (item) => {
      socket.join(`item_${item}`);
      console.log(`An item was created: ${item}`);
    });

    socket.on('disconnect', () => {
      console.log(`❌ client disconnected [id=${socket.id}]`);
    });
  });

  return io;
};

export const getSocketIO = (): SocketIOServer => {
  if (!io) {
    throw new Error('Socket.IO not initialized. Call initializeSocket first.');
  }
  return io;
};
