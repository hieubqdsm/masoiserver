const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected ' + socket.id);
  });
});
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});
server.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});