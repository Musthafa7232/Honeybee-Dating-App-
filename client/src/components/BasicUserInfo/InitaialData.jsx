import * as React from "react";
import { Button, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import axios from "../../Axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth_user } from "../../features/users/AuthReducer";
import AddIcon from "@mui/icons-material/Add";
import SimpleDialog from "./SimpleDialog";
import dayjs from "dayjs";
export default function InitialData() {
  const dispatch = useDispatch();
  const Phone = useSelector((state) => state.phone);
  const {user}=useSelector(state=>state.google)
  const [open, setOpen] = React.useState(false);
  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    birthday: null,
    age: null,
    gender: "",
    location: "",
    phone: "",
    Preference: "",
    isVerified: false,
    firstData: false,
    secondData: false,
    thirdData: false,
    fourthData: false,
    fifthData: false,
    sixthData: false,
    seventhData: false,
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if(user){
          setUserData((prevState) => ({
      ...prevState,
      phone: Phone.number,
      isVerified: true,
      email:user.email,
      fullName:user.fullName
    }));
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setUserData((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };
  useEffect(() => {
    console.log(userData);
    console.log(error, "ji");
    console.log(user);
  }, [userData]);

  const handleSubmit = (event) => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // setUserData((prev) => ({
    //   ...prev,
    //   firstData: true,
    // }));
    if (!userData.fullName)
      setError((prevState) => ({
        ...prevState,
        fullName: "*FullName is required",
      }));
    else setError((prevState) => ({ ...prevState, fullName: null }));

    if (!userData.email)
      setError((prevState) => ({ ...prevState, email: "*Email is required" }));
    else if (!regexEmail.test(userData.email))
      setError((prevState) => ({
        ...prevState,
        email: "*Enter a valid email",
      }));
    else setError((prevState) => ({ ...prevState, email: null }));

    if (!userData.birthday)
      setError((prevState) => ({
        ...prevState,
        birthday: "*Birthdate is required",
      }));
    else if (userData.age < 18)
      setError((prevState) => ({ ...prevState, birthday: "*Should be  18+" }));
    else setError((prevState) => ({ ...prevState, birthday: null }));

    if (!userData.gender)
      setError((prevState) => ({
        ...prevState,
        gender: "*Gender is required",
      }));
    else setError((prevState) => ({ ...prevState, gender: null }));

    if (!userData.Preference)
      setError((prevState) => ({
        ...prevState,
        Preference: "*Preference is required",
      }));
    else setError((prevState) => ({ ...prevState, Preference: null }));

    if (!userData.location)
      setError((prevState) => ({
        ...prevState,
        location: "*Location is required",
      }));
    else setError((prevState) => ({ ...prevState, location: null }));
    if (
      error.fullName === null &&
      error.email === null &&
      error.birthday === null &&
      error.gender === null &&
      error.Preference === null &&
      error.location === null
    )
      setError(false);
    if (!error) {
      if (!loading) {
        setloading(true);
        axios
          .post("/createAccount", userData)
          .then((res) => {
            if (res.data.success) {
              console.log(res);
              setloading(false);
              localStorage.setItem(
                "authorization.user",
                JSON.stringify(res.data.token)
              );
              dispatch(Auth_user());
              navigate(res.data.redirect);
            }
          })
          .catch((err) => {
            setloading(false);
            console.log(err);
          });
      }
    }
  };

  const locationSelector = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

          fetch(geoApiUrl)
            .then((res) => res.json())
            .then((data) => {
              console.log(data.city + "," + data.principalSubdivision);
              setUserData((prevState) => ({
                ...prevState,
                location: data.city + "," + data.principalSubdivision,
              }));
            });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const dateToAge = (data) => {
    const selectedDate = new Date(data.$d);
    const currentDate = new Date();

    const ageDiff = currentDate.getTime() - selectedDate.getTime();
    const ageDate = new Date(ageDiff);

    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(data.$d);
    setUserData((prevState) => ({
      ...prevState,
      birthday: dayjs(data.$d),
      age: calculatedAge,
    }));
  };

  const genderHandler = (value) => {
    console.log(value);
    if (value === "Other") {
      handleClickOpen();
    } else {
      setUserData((prevState) => ({
        ...prevState,
        gender: value,
      }));
    }
  };
  const item = (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={6}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <CardContent>
              <Box
                component="form"
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    my: { xs: 3, sm: 3 },
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Introduce Yourself
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      value={userData.fullName}
                      {...(error.fullName ? { error: true } : {})}
                      fullWidth
                      onChange={(e) =>
                        setUserData((prevState) => ({
                          ...prevState,
                          fullName: e.target.value,
                        }))
                      }
                    />
                    {error.fullName && (
                      <Typography sx={{ color: "red" }}>
                        {error.fullName}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      value={userData.email}
                      {...(error.email ? { error: true } : {})}
                      fullWidth
                      onChange={(e) =>
                        setUserData((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                    />
                    {error.email && (
                      <Typography sx={{ color: "red" }}>
                        {error.email}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          label="Birthday"
                          value={userData.birthday}
                          onChange={dateToAge}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    {error.birthday && (
                      <Typography sx={{ color: "red" }}>
                        {error.birthday}
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <Typography>Gender</Typography>
                    <RadioGroup
                      aria-label="platform"
                      defaultValue="Website"
                      overlay
                      name="platform"
                      sx={{
                        flexDirection: "row",
                        gap: 2,
                        [`& .${radioClasses.checked}`]: {
                          [`& .${radioClasses.action}`]: {
                            inset: -1,
                            border: "3px solid",
                            borderColor: "primary.500",
                          },
                        },
                        [`& .${radioClasses.radio}`]: {
                          display: "contents",
                          "& > svg": {
                            zIndex: 2,
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            bgcolor: "background.body",
                            borderRadius: "50%",
                          },
                        },
                      }}
                    >
                      {["Male", "Female", "Other"].map((value) => (
                        <Sheet
                          key={value}
                          variant="outlined"
                          sx={{
                            borderRadius: "md",
                            bgcolor: "background.body",
                            boxShadow: "sm",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            p: 1,
                            minWidth: 80,
                          }}
                        >
                          <Radio
                            id={value}
                            value={value}
                            onClick={() => genderHandler(value)}
                            checkedIcon={<CheckCircleRoundedIcon />}
                          />
                          <FormLabel htmlFor={value}>{value}</FormLabel>
                        </Sheet>
                      ))}
                    </RadioGroup>
                    {error.gender && (
                      <Typography sx={{ color: "red" }}>
                        {error.gender}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ alignContent: "end" }}>
                    <Typography>Show Me</Typography>
                    <RadioGroup
                      aria-label="platform"
                      defaultValue="Website"
                      overlay
                      name="platform"
                      sx={{
                        flexDirection: "row",
                        gap: 2,
                        [`& .${radioClasses.checked}`]: {
                          [`& .${radioClasses.action}`]: {
                            inset: -1,
                            border: "3px solid",
                            borderColor: "primary.500",
                          },
                        },
                        [`& .${radioClasses.radio}`]: {
                          display: "contents",
                          "& > svg": {
                            zIndex: 2,
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            bgcolor: "background.body",
                            borderRadius: "50%",
                          },
                        },
                      }}
                    >
                      {["Male", "Female", "Everyone"].map((value) => (
                        <Sheet
                          key={value}
                          variant="outlined"
                          sx={{
                            borderRadius: "md",
                            bgcolor: "background.body",
                            boxShadow: "sm",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            p: 1,
                            minWidth: 80,
                          }}
                        >
                          <Radio
                            id={value}
                            value={value}
                            onClick={() =>
                              setUserData((prevState) => ({
                                ...prevState,
                                Preference: value,
                              }))
                            }
                            checkedIcon={<CheckCircleRoundedIcon />}
                          />
                          <SimpleDialog
                            selectedValue={value}
                            open={open}
                            onClose={handleClose}
                          />
                          <FormLabel htmlFor={value}>{value}</FormLabel>
                        </Sheet>
                      ))}
                    </RadioGroup>

                    {error.Preference && (
                      <Typography sx={{ color: "red" }}>
                        {error.Preference}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      sx={{ mt: 2 }}
                      color={error.location ? "error" : "info"}
                      size="small"
                      fullWidth
                      onClick={locationSelector}
                      variant="contained"
                      startIcon={<LocationOnIcon />}
                    >
                      {userData.location ? userData.location : "Location"}
                    </Button>
                    {error.location && (
                      <Typography sx={{ color: "red" }}>
                        {error.location}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Button
                  size="large"
                  color="warning"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  {loading ? "loading" : "Continue"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
  const item2 = (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Box
              component="form"
              noValidate
              sx={{
                ml: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      my: { xs: 3, sm: 3 },
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Its all about Presentation
                  </Typography>
                </Grid>

                <Grid xs={6}></Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      width: 100,
                      height: 100,
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
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
  const item3 = (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );

  return item;

  if (!userData.firstData) {
    return item;
  }

  if (userData.firstData) {
    return item2;
  }
  if (!userData.secondData) {
    return item3;
  }
}
