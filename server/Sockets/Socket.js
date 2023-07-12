import { Server } from "socket.io";

const io = new Server({
    cors: {
      origin: "http://localhost:5173"
    },
  });

  global.onlineUsers = new Map();

io.on("connection", (Socket) => {
  global.chatSocket = Socket;
  Socket.on("add-user", (userId) => {
    console.log('ll');
    onlineUsers.set(userId, Socket.id);
  });

  Socket.on("send-msg", (data) => {
    console.log("hi");
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
        Socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});


export default io