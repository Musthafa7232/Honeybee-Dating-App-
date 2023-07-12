import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Button, TextField, Grid, Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from '@mui/icons-material/Mic';
export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event) => {
    let message = msg;
    message += event.emoji;
    setMsg(message);
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Process the uploaded files
    // You can use libraries like FilePond or handle the upload logic yourself
    console.log("Uploaded files:", files);
  }

  const handleAudioUpload = (event) => {
    const files = event.target.files;
    // Process the uploaded files
    // You can use libraries like FilePond or handle the upload logic yourself
    console.log("Uploaded files:", files);
  };

  const sendChat = () => {
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton>
              <EmojiEmotionsIcon onClick={handleEmojiPickerhideShow} />
            </IconButton>
            {showEmojiPicker && (
              <Picker
                emojiStyle="apple"
                lazyLoadEmojis="true"
                height={300}
                width={300}
                onEmojiClick={handleEmojiClick}
              />
            )}
          </Box>
          <TextField
          sx={{
            borderRadius:5
          }}
            fullWidth
            value={msg}
            placeholder="Type Something..."
            onChange={(e) => setMsg(e.target.value)}
          />
          <label htmlFor="file-upload">
            <IconButton component="span">
              <AddPhotoAlternateIcon />
            </IconButton>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*, video/*"
            style={{ display: "none" }}
            multiple
            onChange={handleFileUpload}
          />
<Button {...msg?'':'disabled'} startIcon={<SendIcon />} onClick={sendChat} />
        {/* {!msg? (
            <> <label htmlFor="file-upload">
            <IconButton component="span">
              <MicIcon />
            </IconButton>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="audio/*"
            style={{ display: "none" }}
            multiple
            onChange={handleAudioUpload}
          />
            </>):
         ( <Button startIcon={<SendIcon />} onClick={sendChat} />)} */}
        </Box>
      </Grid>
    </Grid>
  );
}
