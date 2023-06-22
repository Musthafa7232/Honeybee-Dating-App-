import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
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
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import RelationIcon from "../icons/RelationIcon";
import ReligionIcon from "../icons/ReligionIcon";
import { useSelector, useDispatch } from "react-redux";
function UserProfile({ edit, setEdit }) {
  const user = useSelector((state) => state.user.user);

  let images = (
    <>
      <Card
        sx={{
          mr: 2,
          width: { xs: 100, lg: 250 },
          height: { xs: 100, lg: 250 },
          bgcolor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Avatar sx={{ bgcolor: "lightgray" }}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <AddIcon sx={{ color: "black" }} />
            </IconButton>
          </Avatar>
        </CardContent>
      </Card>
    </>
  );
  
  useEffect(() => {});
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
            <Box sx={{ width: "100%", height: "30vh", position: "relative" }}>
              <Box
                sx={{ objectFit: "cover", width: "100%", height: "100%" }}
                component="img"
                src={user?.coverPicture ? user.coverPicture : " "}
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
                  bgcolor: "black",
                }}
                component="img"
                src={user?.profilePicture ? user.profilePicture : ""}
              />
            </Box>

            <CardContent>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} sx={{ mt: { xs: 10, lg: 0 } }}>
                  <Typography
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: { lg: "2rem" },
                      fontWeight: "bold",
                    }}
                  >
                    {user?.fullName}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 7, lg: 14 } }}
                    variant="subtitle2"
                  >
                    I am an aspiring actor and a bussinessman
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
                    spacing={12}
                  >
                    <Chip
                      startDecorator={<MaleIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      Male
                    </Chip>
                    <Chip
                      startDecorator={<ReligionIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      Islam
                    </Chip>
                    <Chip
                      startDecorator={<RelationIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      Single
                    </Chip>
                    <Chip
                      startDecorator={<SmokingRoomsIcon />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      Non-Smoker
                    </Chip>
                    <Chip
                      startDecorator={<WineBar />}
                      color="neutral"
                      size="lg"
                      variant="soft"
                    >
                      Teetotaler
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

              

                <Grid item xs={12} sx={{my:4}}>
                  <Typography variant="caption">My Story</Typography>
                  <TextField variant="standard" fullWidth />
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
                  {images}
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
