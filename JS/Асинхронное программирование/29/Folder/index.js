//Пример использования WebSockets
//Затем можно написать следующий код для создания WebSocket-сервера:

// server.js
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("A new client connected.");

  // Обработка входящих сообщений
  socket.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Отправка ответа обратно клиенту
    socket.send(`Hello, you sent -> ${message}`);
  });

  // Обработка закрытия соединения
  socket.on("close", () => {
    console.log("Client disconnected.");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
