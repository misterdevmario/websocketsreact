class Sockets {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    //On coneccion
    this.io.on("connection", (socket) => {

        //Escuchar evento: mensaje-al-servidor
      socket.on("mensaje-al-servidor",(data) => {
          console.log(data);

          this.io.emit('mensaje-desde-el-servidor', data)
        });
    });
  }
}

module.exports = Sockets;
