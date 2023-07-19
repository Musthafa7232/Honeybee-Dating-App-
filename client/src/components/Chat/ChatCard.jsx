import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import axios from "../../Axios";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatInput from "./ChatInput";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useNavigate } from "react-router-dom";
import { ReadMsgsApi, addNewMSgApi, getAllmsgsApi } from "../../services/api";
function ChatCard({ currentChat, setCurrentChat, socket }) {
  const user = useSelector((state) => state.user.user);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [typing, setTyping] = useState(null);

  const data = {
    from: user._id,
    to: currentChat._id,
  };
  const navigate = useNavigate();
  useEffect(() => {
    getAllmsgsApi(data)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        navigate("/Chat");
      });
  }, [currentChat]);



  const handleSendMsg = async (msg) => {
    const data = {
      from: user._id,
      to: currentChat._id,
      message: msg,
      messageType: "text",
      conversationId: currentChat.conversationId,
    };
    socket.emit("send-msg", data);

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket) {
      socket.on("show-typing", () => {
        setTyping(true);
      });
    
      socket.on("hide-typing", () => {
        setTyping(false);
      });
    
      socket.on("msg-recieve", (data) => {
        const id = {
          msgId: data._id,
        };
        ReadMsgsApi(id);
        setArrivalMessage({
          fromSelf: false,
          message: data.message,
          messageType: data.messageType,
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleVideoCall = () => {
    const data={
      conversationId:currentChat.conversationId,
      to:currentChat._id,
      from:user._id,
      profilePic:user.profilePic,
      fullname:user.fullName
    }
     window.open(`/room/${currentChat.conversationId}`, "_blank", "height=400,width=600");  
    socket.emit('videoCall',data)
  };

  const messageSection = () => {
    return messages.map((msg, index) => {
      if (msg.fromSelf) {
        return (
          <Box
            ref={scrollRef}
            key={index}
            sx={{
              margin: "1rem 1rem 0.5rem 0rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                display: "inline-block",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem 0.5rem 1rem",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "black",
                  display: "inline",
                  color: "white",
                }}
              >
                {msg.message}
              </Typography>
            </Box>
            <Avatar
              sx={{ width: 29, height: 29, ml: 1 }}
              src={user.profilePic}
            />
          </Box>
        );
      } else {
        return (
          <Box
            ref={scrollRef}
            key={index}
            sx={{
              margin: "1rem 1rem 0.5rem 0rem",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Avatar
              sx={{ width: 29, height: 29, mr: 1 }}
              src={currentChat.profilePic}
            />{" "}
            <Box
              sx={{
                backgroundColor: "lightgrey",
                display: "inline-block",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem 0.5rem 1rem",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "lightgrey",
                  display: "inline",
                  color: "black",
                }}
              >
                {msg.message}
              </Typography>
            </Box>
          </Box>
        );
      }
    });
  };

  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        sx={{
          width: "100%",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          borderBottom: "solid 1px #DFDFDF",
        }}
      >
        <Grid item xs={0.5}>
          <IconButton onClick={() => setCurrentChat(undefined)}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              m: 1,
            }}
          >
            <Avatar src={currentChat.profilePic} sx={{ mx: 1 }} />

            <Typography sx={{ fontWeight: "500" }}>
              {currentChat.fullName}
              {typing && (
                <Typography
                  variant="caption"
                  sx={{ color: "green", display: "block" }}
                >
                  Typing...
                </Typography>
              )}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleVideoCall}>
            <VideoCallIcon sx={{ color: "black" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ minHeight: "28rem", maxHeight: "28rem" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "7px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "darkgrey",
              borderRadius: "2rem",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "grey",
              borderRadius: "2rem",
            },
          }}
        >
          {messageSection()}
        </Box>
      </Grid>

      <Grid item xs={12}>
        <ChatInput handleSendMsg={handleSendMsg} currentChat={currentChat} />
      </Grid>
    </Grid>
  );
}

export default ChatCard;
