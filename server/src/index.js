const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let usersConnected = []

io.on("connection", (socket) => {
  
  console.log("New user in Chatroom");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on('sendMessage', (user, msg) => {
    io.emit('sendMessage', {user: user, msg: msg});
  });

  socket.on('connectUser', (user) => {
    console.log("user trying connect: "+user)
    if(!usersConnected.includes(user)){
        console.log("User connected: "+user)
        usersConnected.push(user)
        io.emit('connectUser', usersConnected);
    }else{
        io.emit('connectUserError', usersConnected);
        console.log("User is connected: "+user)
    }
  });
});

http.listen(3000, () => {
  console.log("Socket listening 127.0.0.1:3000");
});
