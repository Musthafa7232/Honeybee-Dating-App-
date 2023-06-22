import {
  Avatar,
  Box,
  Button,
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
import { useRef } from "react";
function EditProfile({ edit, setEdit }) {
  const user = useSelector((state) => state.user.user);
  const coverPicREF = useRef();

  useEffect(() => {
    console.log(coverPicREF.current);
  }, []);

  const handleClick = () => {
    coverPicREF.current.click();
  };
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
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            {" "}
            <Box
              onClick={handleClick}
              sx={{
                height: { xs: "10rem", lg: "16rem" },
                backgroundColor: "grey",
              }}
            >
              {" "}
              <IconButton>
                <input ref={coverPicREF} hidden accept="image/*" type="file" />
              </IconButton>
            </Box>
            <CardContent>
              <Grid container>
                <Grid item xs={3} md={4} lg={2}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    {" "}
                    <Avatar
                      alt="Remy Sharp"
                      sx={{
                        height: { xs: "5rem", lg: "12rem" },
                        width: { xs: "5rem", lg: "12rem" },
                      }}
                    >
                      <input hidden accept="image/*" type="file" />
                    </Avatar>
                  </IconButton>
                </Grid>

                <Grid item xs={6} md={5} sx={{ mt: "2rem", ml: 2, mb: 6 }}>
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
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
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
                          <input
                            hidden
                            {...(edit ? "disabled" : "")}
                            accept="image/*"
                            type="file"
                          />
                          <AddIcon sx={{ color: "black" }} />
                        </IconButton>
                      </Avatar>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
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
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="caption">My Story</Typography>
                  <TextField variant="standard" fullWidth />
                </Grid>

                <Grid item  sx={{mx:"4",my:'3'}} xs={12}>
                  <Button 
                 
                    variant="outlined"
                    color="warning"
                    onClick={() => setEdit(false)}
                  >
                    Submit Changes
                  </Button>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default EditProfile;
