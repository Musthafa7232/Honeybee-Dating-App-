import * as React from "react";
import { Grid, Skeleton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SetUserData } from "../../features/users/UserReducer";
import RenderContentData from "./RenderContentData";
import { DiscoverUsersApi, disLikeUserApi, likeUserApi } from "../../services/api";
export default function DiscoverSide() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [users, setusers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [shuffledUsers, setShuffledUsers] = useState([]);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [user]);

  useEffect(() => {
  DiscoverUsersApi()
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

    filteredUsers = shuffledUsers?.filter(
      (user) =>
        !likedUserIds.includes(user?._id.toString()) &&
        !dislikedUserIds.includes(user?._id.toString())
    );

    console.log(filteredUsers);
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

    setShuffledUsers(shuffleArray(users));
  }, [users]);

  const likeHandler = async (id) => {
    const data = {
      User: id,
    };
    try {
      const response =await likeUserApi(data)
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
      const response = await disLikeUserApi(data)
      console.log(response);
      dispatch(SetUserData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={11}
          container
          sx={{ mb: 83, position: "relative" }}
        >
          <RenderContentData
            user={user}
            isLoading={isLoading}
            filteredUsers={filteredUsers}
            likeHandler={likeHandler}
            dislikeHandler={dislikeHandler}
          />
        </Grid>
      </Grid>
    </>
  );
}
