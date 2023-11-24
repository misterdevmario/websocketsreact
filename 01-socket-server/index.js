const Server = require("./models/server");
require('dotenv').config()

const server = new Server()

server.execute()
// //Express Server
// const express = require("express");
// const app = express();
// //Sockets Server
// const server = require("http").createServer(app);

// //Sockets config
// const io = require("socket.io")(server);
//   //Deploy public file
//   app.use(express.static(__dirname + ["/public"]))

// io.on("connection", (socket) => {
  
//   //  socket.emit("message",{
//     //   messegae: "Welcome to the server",
//     //   date: new Date()
//     //  })
    
//     socket.on("message-to-server", (data) => {
//       console.log(data);
//       io.emit("message-from-server",data)
//     })
//   });
  



// server.listen(8080, () => {
//   console.log("Server listening on port 8080");
// });
