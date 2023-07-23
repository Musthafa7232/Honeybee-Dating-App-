import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Card,
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
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import FilterModal from "../Modal/FilterModal";
function SearchComponent() {
  const [searchText, setSearchText] = useState("");
const [filter,setFilter]=useState({})
const [modal,setmodal]=useState(false)
useEffect(()=>{
if(searchText.length>3||filter){

}
},[searchText,filter])
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const handleSubmit=()=>{
    
  }
  const handleClose=()=>{
    setmodal(false)
  }

  return (
    <>
      <Grid
        item
        xs={11.9}
        lg={11}
        container
        sx={{ mb: 10, position: "relative" }}
      >
        <FilterModal open={modal} close={handleClose} />
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
          <Grid container>
            <Grid sx={{ mx: 6, mt: 3 }} item xs={12}>
                <Grid sx={{
 display: "flex"
                }}>

              <TextField
                placeholder="Search.."
                fullWidth
                variant="standard"
                size="medium"
                margin="dense"
                value={searchText}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: !searchText && (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),

                  endAdornment: searchText && (
                    <>
                      <InputAdornment position="start" >
                        <IconButton onClick={handleSubmit} >
                            <SearchIcon /> 
                        </IconButton>
                      </InputAdornment>
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={handleClearSearch}>
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    </>
                  ),
                }}
              />
              <Button color="inherit" onClick={()=>setmodal(true)}>
                <TuneIcon />
              </Button>
                </Grid >
                <List component="nav">
                <Box >
                  <ListItem
                    button
                   
                    
                  >
                      <Avatar
                        sx={{ mr: 2 }}
                        alt={123}
                        src={""}
                      />
                    <Grid>
                      <Typography
                      >
                       Babuu namud
                      </Typography>
                    </Grid>
                  </ListItem>
                  <Divider />
                </Box>
           
        </List>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default SearchComponent;
