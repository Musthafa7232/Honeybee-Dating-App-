import { Server } from "socket.io";
import chatModel from "../domain/model/chatModel.js";
import { addNewMsg } from "../usecases/ChatInteractor.js";


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
  Socket.on("send-msg", async(data) => {
    const sendUserSocket = onlineUsers.get(data.to);
   const result=await addNewMsg(data,chatModel)
   console.log(result);
    if (sendUserSocket) {
        Socket.to(sendUserSocket).emit("msg-recieve", result);
    }
  });

  Socket.on('typing',(to)=>{
    const sendUserSocket = onlineUsers.get(to);
    if (sendUserSocket) {
      Socket.to(sendUserSocket).emit("show-typing");
  }
  })

  Socket.on('stop-typing', (to) => {
    const sendUserSocket = onlineUsers.get(to);
    if (sendUserSocket) {
      Socket.to(sendUserSocket).emit("hide-typing");
    }
  });


  Socket.on('getOnlineUsers',(user)=>{
    let users=[]
   for (const [key,value] of onlineUsers.entries()) {
 users.push(key)
    } 
     users.filter(id=>id!=user)
     console.log(user);
   
  })

});


export default io