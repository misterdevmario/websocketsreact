//Express Server
const express = require("express");
const app = express();
//Sockets Server
const server = require("http").createServer(app);

//Sockets config
const io = require("socket.io")(server);


io.on("connection", (socket) => {
  
  //  socket.emit("message",{
  //   messegae: "Welcome to the server",
  //   date: new Date()
  //  })

   socket.on("message-to-server", (data) => {
    console.log(data);
    socket.emit("message-from-server",data)
})
});

//Deploy public file

app.use(express.static(__dirname + ["/public"]))

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
