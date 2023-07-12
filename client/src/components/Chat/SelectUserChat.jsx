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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import axios from '../../Axios'
function SelectUserChat({ contacts, changeChat }) {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
useEffect(()=>{
axios.post('/chat/lastmsg',{
  data:contacts
}, {
  headers: {
    "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
  },
})
},[contacts])
  const filteredContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(searchText.toLowerCase())
  );

  const changeCurrentChat = (index, contact) => {
    changeChat(contact);
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
          return (
            <Box  key={contact._id}>
              <ListItem
                button
                onClick={() => changeCurrentChat(index, contact)}
              >
                <Avatar sx={{mr:2}} alt={contact.name} src={contact.profilePic} />
                <ListItemText primary={contact.fullName} />
              
              </ListItem>
              <Divider />
            </Box>
          );
        })}
      </List>
      </Grid>
      
    </Grid>
  );
}

export default SelectUserChat;
