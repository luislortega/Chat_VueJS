import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.listen(PORT, err => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`🚀 BACKEND RUNNING AT PORT ${PORT}`);
  }
});

/*
var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
*/