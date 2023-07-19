import { Server } from "socket.io";
import chatModel from "../domain/model/chatModel.js";
import { addNewMsg, getLatestMessage } from "../usecases/ChatInteractor.js";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

global.onlineUsers = new Map();

io.on("connection", (Socket) => {
  global.chatSocket = Socket;

    Socket.on("add-user", (userId) => {
    console.log("ll");
    onlineUsers.set(userId, Socket.id);
  });

  Socket.on("videoCall", (data) => {
    console.log('vide0 call',data.to);
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      console.log(sendUserSocket,'buhaaa');
      data.video=true
      data.modal=true
      Socket.to(sendUserSocket).emit("incoming-video-call", data);
    }
  });



  Socket.on("send-msg", async (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    const result = await addNewMsg(data, chatModel);
   
    if (sendUserSocket) { 
      Socket.to(sendUserSocket).emit("msg-recieve", result);
      const body={
        conversationIds:result.conversationId
      }
       const newData=await getLatestMessage(body,chatModel)
      Socket.to(sendUserSocket).emit('new-msg',newData)
    }
  });

  Socket.on("typing", (to) => {
    const sendUserSocket = onlineUsers.get(to);
    if (sendUserSocket) {
      Socket.to(sendUserSocket).emit("show-typing");
    }
  });

  Socket.on("stop-typing", (to) => {
    const sendUserSocket = onlineUsers.get(to);
    if (sendUserSocket) {
      Socket.to(sendUserSocket).emit("hide-typing");
    }
  });

  Socket.on("getOnlineUsers", (user) => {
    let users = [];
    for (const [key, value] of onlineUsers.entries()) {
      users.push(key);
    }
    users.filter((id) => id != user);
    console.log(user);
  });



  Socket.on("audioCall", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      data.audio=true
      Socket.to(sendUserSocket).emit("incoming-audio-call", data);
    }
  });

  Socket.on("callRejected",(data)=>{
    const sendUserSocket = onlineUsers.get(data.from);
    if (sendUserSocket) {
      console.log('rejected',data);
      Socket.to(sendUserSocket).emit("videoCallRejected");
    } 
  })

  Socket.on("callAccepted",(data)=>{
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      console.log('accepted');
    } 
  })
});

io.on("connect_error", (error) => {
  console.log("Socket connect_error:", error)
})

io.on("error", (error) => {
  console.log("Socket error:", error)
})

export default io;
