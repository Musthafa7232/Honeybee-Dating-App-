import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { context } from "../../ContextProvider";
import { useContext } from "react";
import axios from "../../Axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export default function Sidebar() {
  const navigate=useNavigate()
  return (
    <>
      <Grid
        container
        justifyContent="start"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={3}  xl={4}>
        <Card
      sx={{
        borderRadius: 6,
        backdropFilter: 'brightness(0.9) blur(15px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <CardContent>
        <List component="nav">
          <ListItem >
            <Button component="a" href="/discover" fullWidth>
              <ListItemText sx={{ color: 'black' }} primary="Discover" />
            </Button>
          </ListItem>
          <ListItem >
            <Button component="a" href="/matches" fullWidth>
              <ListItemText sx={{ color: 'black' }} primary="Matches" />
            </Button>
          </ListItem>
          <ListItem >
            <Button component="a" href="/search" fullWidth>
              <ListItemText sx={{ color: 'black' }} primary="Search" />
            </Button>
          </ListItem>
          <ListItem >
            <Button component="a" href="/honeyvip" fullWidth>
              <ListItemText sx={{ color: 'black' }} primary="HoneyVip" />
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
    </>
  );
}
