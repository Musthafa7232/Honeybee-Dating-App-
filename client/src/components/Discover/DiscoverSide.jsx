import * as React from "react";
import { Grid, Skeleton } from "@mui/material";
import axios from "../../Axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SetUserData } from "../../features/users/UserReducer";
import RenderContentData from "./RenderContentData";
export default function DiscoverSide() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [users, setusers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [shuffledUsers, setShuffledUsers] = useState([]);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    axios
      .get("/discover", {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
        },
      })
      .then((res) => {
        setusers(res.data);
      });
  }, [isLoading]);

  let filteredUsers = [];

  if (users) {
    const likedUserIds = user?.likedUsers?.map((likedUser) =>
      likedUser.toString()
    );
    const dislikedUserIds = user?.dislikedUsers?.map((dislikedUser) =>
      dislikedUser.toString()
    );

    filteredUsers = users.filter(
      (user) =>
        !likedUserIds.includes(user._id.toString()) &&
        !dislikedUserIds.includes(user._id.toString())
    );
  }

  useEffect(() => {
    // Function to shuffle the array using Fisher-Yates algorithm
    const shuffleArray = (array) => {
      const shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    setShuffledUsers(shuffleArray(filteredUsers));
  }, [users]);

  const likeHandler = async (id) => {
    const data = {
      User: id,
    };
    try {
      const response = await axios.put("/likeUser", data, {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
        },
      });
      dispatch(SetUserData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const dislikeHandler = async (id) => {
    const data = {
      User: id,
    };
    try {
      const response = await axios.put("/dislikeUser", data, {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
        },
      });
      dispatch(SetUserData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Grid container sx={{ minHeight: "100vh" }}>
        {isLoading ? (
          // Skeleton loader while loading users
          <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" height="80%" width="100%" />
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            lg={11}
            container
            sx={{ minHeight: "155vh", position: "relative" }}
          >
            <RenderContentData
              isLoading={isLoading}
              filteredUsers={filteredUsers}
              likeHandler={likeHandler}
              dislikeHandler={dislikeHandler}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}
