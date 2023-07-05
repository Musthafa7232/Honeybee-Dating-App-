import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Skeleton,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import Chip from "@mui/joy/Chip";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import WineBar from "@mui/icons-material/WineBar";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import FemaleIcon from "@mui/icons-material/Female";
import GenderIcon from "../icons/GenderIcon";
import RelationIcon from "../icons/RelationIcon";
import ReligionIcon from "../icons/ReligionIcon";
import { useSelector, useDispatch } from "react-redux";
function UserProfile({ edit, setEdit }) {
  const user = useSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ my: { lg: 13 }, minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={10}>
          <Card
            variant="outlined"
            sx={{
              my: { xs: 9, lg: 0 },
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Box sx={{ width: "100%", height: "40vh", position: "relative" }}>
              <Box
                sx={{ objectFit: "cover", width: "100%", height: "100%" }}
                component="img"
                src={user?.coverPic ? user?.coverPic : "/cover-picture.png"}
              />
              <Box
                sx={{
                  objectFit: "cover",
                  width: 150,
                  height: 150,
                  borderRadius: "5rem",
                  position: "absolute",
                  top: "100%",
                  left: { xs: "10%", lg: "0%" },
                  transform: "translate(50%, -50%)",
                }}
                component="img"
                src={user?.profilePic ? user?.profilePic : "/avatar.jpg"}
              />
            </Box>

            <CardContent>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid
                  item
                  xs={7}
                  lg={8}
                  sx={{ mt: { xs: 10, lg: 9, xl: 0 }, ml: 3 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: { lg: "2rem" },
                      fontWeight: "bold",
                    }}
                  >
                    {isLoading ? <Skeleton width="15rem" /> : user.fullName}{" "}
                    {isLoading ? (
                      <Skeleton width="5rem" />
                    ) : (
                      <Typography variant="caption">{user.age}</Typography>
                    )}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 7, lg: 14 } }}
                    variant="subtitle2"
                  >
                    {isLoading ? <Skeleton width="13rem" /> : user.bio}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 7, lg: 14 } }}
                    variant="subtitle2"
                  >
                    {isLoading ? <Skeleton width="13rem" /> : user.location}
                  </Typography>
                  <Grid
                    item
                    xs={12}
                    lg
                    sx={{
                      my: 3,
                      display: { lg: "flex" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Chip
                      startDecorator={<GenderIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      {isLoading ? <Skeleton /> : user.gender}
                    </Chip>
                    <Chip
                      startDecorator={<ReligionIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      {isLoading ? <Skeleton /> : user.faith}
                    </Chip>
                    <Chip
                      startDecorator={<RelationIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      {isLoading ? <Skeleton /> : user.realationshipStatus}
                    </Chip>
                    <Chip
                      startDecorator={<SmokingRoomsIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      {isLoading ? <Skeleton /> : user.smoking}
                    </Chip>
                    <Chip
                      startDecorator={<WineBar />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : user.drinking ? (
                        user.drinking
                      ) : (
                        ""
                      )}
                    </Chip>
                  </Grid>
                </Grid>
                <Grid item xs sx={{ mt: { xs: 8, lg: 0 } }}>
                  <IconButton
                    onClick={() => setEdit(true)}
                    aria-label="edit"
                    size="large"
                  >
                    <EditIcon sx={{ color: "black" }} fontSize="inherit" />
                  </IconButton>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={12} sx={{ my: 4 }}>
                  <Card
                    sx={{
                      borderRadius: 16,
                      p: 4,
                      backdropFilter: "brightness(0.9) blur(15px)",
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">My Story</Typography>
                      {isLoading ? (
                        <Skeleton height={100} />
                      ) : user.myStory ? (
                        <Typography
                          sx={{ mt: 2 }}
                          variant="body1"
                          color="textSecondary"
                        >
                          {user.myStory}
                        </Typography>
                      ) : (
                        " "
                      )}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignContent: "end",
                    alignItems: "end",
                  }}
                >
                  {user?.images.map((image) => {
                    return (
                      <Card
                        key={user.phone}
                        sx={{
                          mr: 2,
                          width: { xs: 100, sm: 150, lg: 250 },
                          height: { xs: 100, sm: 150, lg: 250 },
                          backgroundImage: `url(${image})`,
                          bgcolor: "lightgray",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      />
                    );
                  })}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserProfile;
