import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Box,
  Popper,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { socket } from "../../Socket";
import { getLastMsgsApi } from "../../services/api";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import BlockedUsermodal from "../ErrorModals/BlockedUsermodal";
import dayjs from "dayjs";
function SelectUserChat({ contacts, setContacts, changeChat, user,onlineUsers }) {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [lastChatteduser, setLastChattedUser] = useState([]);
  const [typing, setTyping] = useState({
    to: null,
    show: false,
  });
  const [chattedUser, setChattedUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  useEffect(() => {
    if (onlineUsers.length > 0) {
      setContacts((contacts) =>
        contacts.map((contact) => {
          if (onlineUsers.includes(contact._id)) {
            return { ...contact, isOnline: true };
          } else {
            return { ...contact, isOnline: false };
          }
        })
      );
    }
  }, [onlineUsers]);

  useEffect(() => {
    let conversationIds = [];
    contacts.forEach((contact) => {
      conversationIds.push(contact.conversationId);
    });
    const data = {
      conversationIds,
    };
    getLastMsgsApi(data).then((res) => setLastChattedUser(res.data));
  }, [contacts]);
//FUTURE UPDATION FOR SHOWING TIME

  // useEffect(() => {
  //   const userData = lastChatteduser.map((user) => {
  //     const messageTime = dayjs.utc(user.updatedAt);

  //     const daysDiff = dayjs().diff(messageTime, "day");

  //     const timeAgo = messageTime.fromNow();

  //     let displayTime;
  //     if (daysDiff >= 2) {
  //       displayTime = messageTime.format("MMM DD, YYYY");
  //     } else if (daysDiff === 1) {
  //       displayTime = "Yesterday";
  //     } else {
  //       displayTime = timeAgo;
  //     }

  //     return { ...user, lastmessaged: displayTime };
  //   });
  //   setLastChattedUser(userData);
  // }, []);

  useEffect(() => {
    if (socket) {
      socket.on("show-typing", (to) => {
        setTyping((prev) => ({ ...prev, to: to, show: true }));
      });
      socket.on("hide-typing", (to) => {
        setTyping((prev) => ({ ...prev, to: null, show: false }));
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("new-msg", (data) => {
          console.log(data);
        setLastChattedUser((prev) => {
          let found=false
          const updatedUsers = prev.map((user) => {
            if (user.conversationId === data[0].conversationId) {
              found=true
              return { ...user, ...data[0] };
            }
            return user;
          });

          if(!found){
            updatedUsers.push(data[0])
          }
          // Sort the updatedUsers array based on updatedAt property
          updatedUsers.sort(
            (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
          );
          return updatedUsers;
        });
      });
    }
  }, []);

  useEffect(() => {
    const sortUsers = contacts.map((user) => {
      lastChatteduser.forEach((chat) => {
        if (user.conversationId === chat.conversationId) {
          user.updatedAt = chat.updatedAt;
        }
      });
      return user;
    });
    let sort = sortUsers.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    setChattedUsers(sort);
  }, [lastChatteduser]);

  const filteredContacts = Array.from(contacts).filter((contact) =>
    contact?.fullName.toLowerCase().includes(searchText.toLowerCase())
  );

  const changeCurrentChat = (index, contact, id) => {
    if (user.blockedUsers.includes(contact._id)) {
      setModalOpen(true);
    } else {
      changeChat(contact, id);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    setAnchorEl(e.currentTarget);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container>
      <Grid sx={{ mx: 6 }} item xs={12}>
        <TextField
          placeholder="New Conversations"
          fullWidth
          variant="standard"
          size="medium"
          margin="dense"
          value={searchText}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: searchText && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleClearSearch}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Popper open={open} anchorEl={anchorEl}>
          <Paper elevation={3} sx={{ mt: 1, width: "100%" }}>
            {searchText && (
              <List>
                {filteredContacts.map((contact, index) => (
                  <Box key={contact._id}>
                    <ListItem
                      button
                      onClick={() => changeCurrentChat(index, contact)}
                    >
                      <Avatar
                        sx={{ mr: 2 }}
                        alt={contact.name}
                        src={contact.profilePic}
                      />
                      <ListItemText primary={contact.fullName} />
                    </ListItem>
                    <Divider />
                  </Box>
                ))}
              </List>
            )}
          </Paper>
        </Popper>
        <List component="nav">
          {chattedUser.map((contact, index) => {
            const filteredUser = lastChatteduser.filter(
              (result) => result.conversationId === contact.conversationId
            );
            if (filteredUser.length > 0) {
              const result = filteredUser[0];
              return (
                <Box key={contact._id}>
                  <ListItem
                    button
                    onClick={() =>
                      changeCurrentChat(index, contact, result._id)
                    }
                  >
                    {contact.isOnline ? (
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        sx={{ mr: 2 }}
                        variant="dot"
                      >
                        <Avatar alt={contact.name} src={contact.profilePic} />
                      </StyledBadge>
                    ) : (
                      <Avatar
                        sx={{ mr: 2 }}
                        alt={contact.name}
                        src={contact.profilePic}
                      />
                    )}

                    <Grid
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography
                        {...(!result.read && result.sender === contact._id
                          ? { fontWeight: "bold" }
                          : {})}
                      >
                        {contact.fullName}
                      </Typography>
                      <Typography
                        {...(!result.read && result.sender === contact._id
                          ? { fontWeight: "bold" }
                          : {})}
                        variant="body2"
                        color="textSecondary"
                      >
                        {typing.show && typing.to === contact._id ? (
                          <Typography
                            variant="caption"
                            sx={{ color: "green", display: "block" }}
                          >
                            Typing...
                          </Typography>
                        ) : result.sender === contact._id ? (
                          `${contact.fullName}:${result.message}`
                        ) : (
                          `You:${result.message}`
                        )}
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography
                        {...(!result.read && result.sender === contact._id
                          ? { fontWeight: "bold" }
                          : {})}
                        sx={{
                          textAlign: "end",
                        }}
                      >
                        {result.lastmessaged}
                      </Typography>
                    </Grid>
                  </ListItem>
                  <Divider />
                </Box>
              );
            }
            return null; // Return null if there's no matching lastChatteduser
          })}
        </List>
      </Grid>
      <BlockedUsermodal open={modalOpen} close={handleClose} user={user} />
    </Grid>
  );
}

export default SelectUserChat;
