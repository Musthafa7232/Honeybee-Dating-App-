import * as React from "react";
import { Grid, Skeleton, Typography, Card } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RenderLikedUsersCard from "./RenderLikedUsersCard";
import { SetUserData } from "../../features/users/UserReducer";
import { showAllLikedUsersApi } from "../../services/api";

function LikedUsers() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(true);
  const [likedUsers, setLikedUsers] = useState([]);


  useEffect(() => {
showAllLikedUsersApi()
      .then((res) => {
        setLikedUsers(res.data);
      });
  }, []);

  useEffect(() => {
    if (likedUsers) {
        setLoading(false);
    }
  }, [likedUsers]);

  return (
    <Grid container sx={{ minHeight: "84vh" }}>
      {isLoading ? (
        // Skeleton loader while loading users
        <Grid item xs={12} md={6}>
              <Card
              variant="outlined"
              sx={{
                width: "100%",
                height:'38rem',
                borderRadius: 6,
                backdropFilter: "brightness(0.9) blur(15px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display:'flex',
                justifyContent:'center'
              }}
            >
          <Skeleton variant="rectangular" height={118} />
          </Card>
        </Grid>
      ) : (
        <Grid item xs={12} lg={11} container sx={{minHeight:'39rem'}}>
          {likedUsers ? (
            <RenderLikedUsersCard matches={likedUsers} isLoading={isLoading} />
          ) : (
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                height:'38rem',
                borderRadius: 6,
                backdropFilter: "brightness(0.9) blur(15px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display:'flex',
                justifyContent:'center'
              }}
            >
              <Typography variant="h5" >No matches Found</Typography>
            </Card>
          )}
        </Grid>
      )}
    </Grid>
  );
}

export default LikedUsers;