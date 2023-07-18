import * as React from "react";
import { Grid, Skeleton, Typography, Card } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RenderMatchCard from "./RenderMatchCard";
import { SetUserData } from "../../features/users/UserReducer";
import { ShowMatchesApi } from "../../services/api";

function MatchSide() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(true);
  const [matchedUsers, setMatchedUsers] = useState([]);
  useEffect(() => {
    if (matchedUsers) {
      setLoading(false);
    }
  }, [matchedUsers]);

  useEffect(() => {
   ShowMatchesApi()
      .then((res) => {
        setMatchedUsers(res.data);
      });
  }, [isLoading]);
  useEffect(() => {
    console.log(matchedUsers);
  }, [matchedUsers]);

  return (
    <Grid container sx={{ minHeight: "84vh" }}>
      {isLoading ? (
        // Skeleton loader while loading users
        <Grid item xs={12} md={6}>
          <Skeleton variant="rectangular" height={118} />
        </Grid>
      ) : (
        <Grid item xs={12} lg={11} container>
          {matchedUsers.length > 0 ? (
            <RenderMatchCard matches={matchedUsers} isLoading={isLoading} />
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

export default MatchSide;
