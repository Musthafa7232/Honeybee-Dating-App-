import * as React from "react";
import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import axios from "../../Axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ChatCard from "./ChatCard";
import { useRef } from "react";
import SelectUserChat from "./SelectUserChat";
import { host } from "../../constants/Constants";
import {socket } from '../../Socket'
function ChatContainer() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);

      useEffect(() => {
        if (user) {
          socket.emit("add-user", user._id);
        }
      }, [user]);

      useEffect(() => {
        if (user) {
            axios
            .get("/matches", {
              headers: {
                "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
              },
            })
            .then((res) => {
                console.log(res.data);
                setContacts(res.data);
            });
        }
      }, [user]);

      const handleChatChange = (chat) => {
        console.log(chat);
        setCurrentChat(chat);
      };
  return (
    <>
    <Grid container>
      <Grid
        item
        xs={12}
        lg={11}
        container
        sx={{ mb: 10, position: "relative" }}
      > 
          <Card
      className="CardItems"
      variant="outlined"
      sx={{
        width: "100%",
        minHeight: "70vh",
        borderRadius: 6,
        backdropFilter: "brightness(0.9) blur(15px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
    <CardContent>
        {currentChat === undefined ? (
 <SelectUserChat contacts={contacts} changeChat={handleChatChange}/>
      ) : (
        <ChatCard currentChat={currentChat} setCurrentChat={setCurrentChat} socket={socket} />
      )}
    </CardContent>

    </Card>
      </Grid>
    </Grid>
  </>
  )
}

export default ChatContainer
