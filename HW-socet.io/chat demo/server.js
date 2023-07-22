"use strict";

const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const httpServer = http.createServer(app);
const ioServer = new Server(httpServer);
const port = 8888;

// статичная раздача файлов из ./public
app.use(express.static("./public"));

/* -------------------------------------------------------------------------- */
/*                           обработка io сообщений                           */
/* -------------------------------------------------------------------------- */

// добавляем прослушку сообщений от людей
const ioHandler = (socket) => {

  console.log("new user");

  // прослушка сообщений человека по каналу "test"
  socket.on("test", () => {
    console.log("some one make test");

    socket.emit("banana", "pruivet");
  });

  socket.on("newMsg", (msg) => {
    ioServer.emit("newMsg", msg);
    // socket.broadcast.emit("newMsg", msg);
  });

};

// обработка подключений по socket
ioServer.on("connection", ioHandler);

// запуск сервера
httpServer.listen(port, () => {
  console.log(`open server: http://localhost:${port}`);
});
