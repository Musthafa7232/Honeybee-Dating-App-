import * as React from "react";
import { Grid, Skeleton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SetUserData } from "../../features/users/UserReducer";
import RenderContentData from "./RenderContentData";
import {
  DiscoverUsersApi,
  disLikeUserApi,
  likeUserApi,
} from "../../services/api";
import BoilerPlateCode from "../BoilerPlateCode";
export default function DiscoverSide() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [users, setusers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [shuffledUsers, setShuffledUsers] = useState([]);
  const [tost, settost] = useState({});
  const initial={
    open:false,
    success:false,
    data:''
  }
  useEffect(()=>{
settost(initial)
  },[])
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
      })
      .catch((err) => {
        window.location.reload();
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
      settost(initial)
      const response = await likeUserApi(data);
      settost({
      data:'Liked user successfully',
      success:true,
      open:true
     })
    
      dispatch(SetUserData(response.data));
   
    } catch (err) {
      settost({
        data:'Falied to like user ',
        success:false,
        open:true
       })
      console.log(err);
    }
  };

 

  const dislikeHandler = async (id) => {
    const data = {
      User: id,
    };
    try {
      settost(initial)
      const response = await disLikeUserApi(data);
      settost({
        data:'Disliked user successfully',
        success:true,
        open:true
       })
       
      dispatch(SetUserData(response.data));
    } catch (err) {
      settost({
        data:'Falied to dislike user ',
        success:false,
        open:true
       })
      console.log(err);
    }
  };
useEffect(()=>{
console.log(tost);
},[tost])
  const setToastClosed=()=>{
    settost(initial)
  }

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={11}
          container
          sx={{ position: "relative", minHeight: { xs: "85.7vh", lg: 0 } }}
        >
          <RenderContentData
            user={user}
            isLoading={isLoading}
            filteredUsers={filteredUsers}
            likeHandler={likeHandler}
            dislikeHandler={dislikeHandler}
          />
          <BoilerPlateCode success={tost.success} open={tost.open} data={tost.data} setToastClosed={setToastClosed} />
        </Grid>
      </Grid>
    </>
  );
}
