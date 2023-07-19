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
import axios from "../../Axios";
function SelectUserChat({ contacts, changeChat, user }) {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [lastChatteduser, setLastChattedUser] = useState([]);

  useEffect(() => {
    let conversationIds = [];
    contacts.forEach((contact) => {
      conversationIds.push(contact.conversationId);
    });
    axios
      .post(
        "/chat/lastmsg",
        {
          conversationIds,
        },
        {
          headers: {
            "auth-token": JSON.parse(
              localStorage.getItem("authorization.user")
            ),
          },
        }
      )
      .then((res) => setLastChattedUser(res.data));
  }, [contacts]);
  
  const filteredContacts = Array.from(contacts).filter((contact) =>
    contact?.fullName.toLowerCase().includes(searchText.toLowerCase())
  );

  const changeCurrentChat = (index, contact, id) => {
    changeChat(contact, id);
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
          {contacts.map((contact, index) => {
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
                    <Avatar
                      sx={{ mr: 2 }}
                      alt={contact.name}
                      src={contact.profilePic}
                    />
                    <Grid>
                      <Typography
                        {...(!result.read && result.sender === contact._id ? { fontWeight: "bold" } : {})}
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
                        {result.sender === contact._id
                          ? `${contact.fullName}:`
                          : "You:"}
                        {result.message}
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
    </Grid>
  );
}

export default SelectUserChat;
