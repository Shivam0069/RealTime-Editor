const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
console.log("Before io.on(connection)");
io.on("connection", (socket) => {
  console.log("Inside io.on(connection)");
  console.log("socket connected", socket.id);
});
console.log("After io.on(connection)");

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
