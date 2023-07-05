import * as React from "react";
import { Grid, Skeleton } from "@mui/material";
import axios from "../../Axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RenderMatchCard from "./RenderMatchCard";
import { SetUserData } from "../../features/users/UserReducer";

function MatchSide() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(true);
  const [matchedUsers, setMatchedUsers] = useState([]);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    axios
      .get("/matches", {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
        },
      })
      .then((res) => {
        setMatchedUsers(res.data);
      });
  }, [isLoading]);
  useEffect(() => {
    console.log(matchedUsers);
  }, [matchedUsers]);
  

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {isLoading ? (
        // Skeleton loader while loading users
        <Grid item xs={12} md={6}>
          <Skeleton variant="rectangular" height={118} />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          lg={11}
          container
          sx={{ minHeight: "155vh", position: "relative" }}
        >
          <RenderMatchCard matches={matchedUsers} isLoading={isLoading} />
        </Grid>
      )}
    </Grid>
  );
}

export default MatchSide;
