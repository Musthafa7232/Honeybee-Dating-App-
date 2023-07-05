import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Modal,
  Skeleton,
  TextField,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import dayjs from "dayjs";
import Chip from "@mui/joy/Chip";
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
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import WineBar from "@mui/icons-material/WineBar";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import GenderIcon from "../icons/GenderIcon";
import RelationIcon from "../icons/RelationIcon";
import ReligionIcon from "../icons/ReligionIcon";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import axios from '../../Axios'
import { SetUserData } from "../../features/users/UserReducer";
function EditProfile({ edit, setEdit }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(true);
  const [option, setOption] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const coverPicREF = useRef();
  const profilePicREF = useRef();
  const image0 = useRef();
  const image1 = useRef();
  const image2 = useRef();
  const [userData, setUserData] = useState({
    fullName: user.fullName,
    email: user.email,
    birthday: new Date(user.birthday),
    age: user.age,
    gender: user.gender || "Your Gender",
    location: user.location,
    phone: user.phone,
    Preference: user.Preference,
    profilePic: user.profilePic || "/avatar.jpg",
    coverPic: user.coverPic || "/cover-picture.png",
    faith: user.faith || "Your Religion",
    myStory: user.myStory,
    drinking: user.drinking || "Your Drinking Habit",
    smoking: user.smoking || "Your Smoking Habit",
    bio: user.bio,
    realationshipStatus: user.realationshipStatus || "Your RelationShip Status",
    image0: user.images[0],
    image1: user.images[1],
    image2: user.images[2],
  });

  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setEdit(true);
    if (user) {
      setLoading(false);
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const openModal = (data) => {
    setOption(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let gendersOptions = [
    "Male",
    "Female",
    "Agender",
    "Genderqueer",
    "Bigender",
    "Non-binary",
    "Genderfluid",
    "Two-spirit",
    "Androgynous",
    "Neutrois",
    "Demigender",
    "Gender nonconforming",
    "Pangender",
    "Third gender",
    "Transgender",
    "Transmasculine",
    "Transfeminine",
    "Gender questioning",
    "Gender variant",
    "Intergender",
    "Genderflux",
    "Polygender",
    "Multigender",
    "Cisgender",
    "Other",
  ];

  let religionOptions = [
    "Hindu",
    "Christian",
    "Spiritual",
    "Agnostic",
    "Muslim",
    "Sikh",
    "Atheist",
    "Jain",
    "Buddhist",
    "Bahai",
    "jewish",
    "Other",
    "Parsi",
    "None",
  ];

  let relationShipOptions = [
    "Single",
    "Single with kid(s)",
    "Married",
    "Widowed",
    "Widowed with kid(s)",
    "Divorced",
    "Divorced with kid(s)",
    "Seperated",
    "Seperated with kid(s)",
  ];

  let smokingOptions = ["No", "Yes", "Planning to quit"];

  let drinkingOption = [
    "Regular",
    "Socially",
    "Occasionally",
    "Planning to quit",
    "Teetotaler",
  ];

  const renderModal = () => {
    if (option === "gender") {
      return (
        <>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            <GenderIcon /> Your Gender
          </Typography>
          <Grid container sx={{ display: { xs: "flex", lg: "" } }}>
            {gendersOptions.map((data) => (
              <Grid key={data} item xs sx={{ m: 1 }}>
                <Chip
                  color="neutral"
                  size="lg"
                  variant="soft"
                  onClick={() => handleGender(data)}
                >
                  {data}
                </Chip>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (option === "realationshipStatus") {
      return (
        <>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            <RelationIcon /> Your RelationShip
          </Typography>
          <Grid container sx={{ display: { xs: "flex", lg: "" } }}>
            {relationShipOptions.map((data) => (
              <Grid key={data} item xs sx={{ m: 1 }}>
                <Chip
                  color="neutral"
                  size="lg"
                  variant="soft"
                  onClick={() => handleRelation(data)}
                >
                  {data}
                </Chip>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (option === "faith") {
      return (
        <>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            <ReligionIcon /> Your Faith
          </Typography>
          <Grid container sx={{ display: { xs: "flex", lg: "" } }}>
            {religionOptions.map((data) => (
              <Grid key={data} item xs sx={{ m: 1 }}>
                <Chip
                  color="neutral"
                  size="lg"
                  variant="soft"
                  onClick={() => handlefaith(data)}
                >
                  {data}
                </Chip>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (option === "smoking") {
      return (
        <>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            <SmokingRoomsIcon /> Your Smoking Habit
          </Typography>
          <Grid container sx={{ display: { xs: "flex", lg: "" } }}>
            {smokingOptions.map((data) => (
              <Grid key={data} item xs sx={{ m: 1 }}>
                <Chip
                  color="neutral"
                  size="lg"
                  variant="soft"
                  onClick={() => handleSmoking(data)}
                >
                  {data}
                </Chip>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (option === "drinking") {
      return (
        <>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            <WineBar /> Your Drinking Habbit
          </Typography>
          <Grid container sx={{ display: { xs: "flex", lg: "" } }}>
            {drinkingOption.map((data) => (
              <Grid key={data} item xs sx={{ m: 1 }}>
                <Chip
                  color="neutral"
                  size="lg"
                  variant="soft"
                  onClick={() => handledrinking(data)}
                >
                  {data}
                </Chip>
              </Grid>
            ))}
          </Grid>
        </>
      );
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
      birthday: data.$d,
      age: calculatedAge,
    }));
  };

  const handleSubmit =async () => {
    if (!loader) {
      setLoader(true);
      const formData = new FormData();
      formData.append("fullName", userData.fullName);
      formData.append("email", userData.email);
      formData.append("birthday", userData.birthday);
      formData.append("age", userData.age);
      formData.append("gender", userData.gender);
      formData.append("location", userData.location);
      formData.append("faith", userData.faith);
      formData.append("myStory", userData.myStory);
      formData.append("drinking", userData.drinking);
      formData.append("smoking", userData.smoking);
      formData.append("bio", userData.bio);
      formData.append("phone", userData.phone);
      formData.append("Preference", userData.Preference);
      formData.append("realationshipStatus", userData.realationshipStatus);
    
      if (profilePicREF.current.files.length) {
        formData.append(
          "profilePic",
          profilePicREF.current.files[0],
          profilePicREF.current.files[0].name
        );
      }
    
      if (coverPicREF.current.files.length) {
        formData.append(
          "coverPic",
          coverPicREF.current.files[0],
          coverPicREF.current.files[0].name
        );
      }
    
      if (image0.current.files.length) {
        formData.append(
          "image0",
          image0.current.files[0],
          image0.current.files[0].name
        );
      }
      if (image1.current.files.length) {
        formData.append(
          "image1",
          image1.current.files[0],
          image1.current.files[0].name
        );
      }
      if (image2.current.files.length) {
        formData.append(
          "image2",
          image2.current.files[0],
          image2.current.files[0].name
        );
      }
      for(let [key,value] of formData.entries() ){
        console.log(value)
      }
      try{
      const { data } = await axios.patch("/userEdit", formData, {
        headers: {"auth-token": JSON.parse(localStorage.getItem("authorization.user")), "Content-Type": "multipart/form-data" },
      })
      dispatch(SetUserData(data))
      setLoader(false)
      setEdit(false)
      }catch(error){
console.log(error.message);
setLoader(false)
      }
    }
  };

  const handleProfilePic = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setUserData((prev) => ({
        ...prev,
        profilePic: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };
  const handleCoverPic = (e) => {
    if (e.target.files[0]) {
      setUserData((prev) => ({
        ...prev,
        coverPic: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };
  const handleimage1 = (e) => {
    if (e.target.files[0]) {
      setUserData((prev) => ({
        ...prev,
        image0: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };
  const handleimage2 = (e) => {
    if (e.target.files[0]) {
      setUserData((prev) => ({
        ...prev,
        image1: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };
  const handleimage3 = (e) => {
    if (e.target.files[0]) {
      setUserData((prev) => ({
        ...prev,
        image2: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };
  const handleGender = (data) => {
    setUserData((prev) => ({ ...prev, gender: data }));
    setModalOpen(false);
  };

  const handleRelation = (data) => {
    setUserData((prev) => ({ ...prev, realationshipStatus: data }));
    setModalOpen(false);
  };
  const handlefaith = (data) => {
    setUserData((prev) => ({ ...prev, faith: data }));
    setModalOpen(false);
  };
  const handleSmoking = (data) => {
    setUserData((prev) => ({ ...prev, smoking: data }));
    setModalOpen(false);
  };
  const handledrinking = (data) => {
    setUserData((prev) => ({ ...prev, drinking: data }));
    setModalOpen(false);
  };
  const handleStoryChange = (e) => {
    const myStory = e.target.value;
    setUserData((prevData) => ({ ...prevData, myStory }));
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
              my: { xs: 9, lg: 0 },
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Box sx={{ width: "100%", height: "40vh", position: "relative" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${userData.coverPic})`,
                  bgcolor: "grey",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button
                  component="label"
                  hidden
                  sx={{ width: "100%", height: "100%" }}
                >
                  <input
                    ref={coverPicREF}
                    onChange={handleCoverPic}
                    hidden
                    accept="image/*"
                    type="file"
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  width: { xs: 200, lg: 280 },
                  height: { xs: 200, lg: 280 },
                  borderRadius: "13rem",
                  position: "absolute",
                  top: "100%",
                  left: {sm:'18%',xl:'26%', lg: "13%" },
                  transform: "translate(50%, -50%)",
                  backgroundImage: `url(${userData.profilePic})`,
                  bgcolor: "black",
                  backgroundSize: "cover",
                }}
              >
                <Button
                  component="label"
                  hidden
                  sx={{ width: "100%", height: "100%" }}
                >
                  <input
                    ref={profilePicREF}
                    onChange={handleProfilePic}
                    hidden
                    accept="image/*"
                    type="file"
                  />
                </Button>
              </Box>
            </Box>

            <CardContent>
              <Grid container spacing={2} sx={{ mt: { xs: 12, lg: 20 } }}>
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
                    <Typography sx={{ color: "red" }}>{error.email}</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ mt: 1 }}
                    label="Phone"
                    variant="outlined"
                    value={userData.phone}
                    disabled
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Birthday"
                        value={dayjs(userData.birthday)}
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
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, p: 1, color: "black", bgcolor: "transparent" }}
                    color={error.location ? "error" : "inherit"}
                    size="small"
                    fullWidth
                    onClick={locationSelector}
                    variant="outlined"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="bio"
                    label="Your Bio"
                    multiline
                    fullWidth
                    rows={4}
                    value={userData.bio}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, bio: e.target.value }))
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg
                  sx={{
                    my: 3,
                    display: { xs: "flex", lg: "flex" },
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                  }}
                >
                  <Chip
                    onClick={() => openModal("gender")}
                    startDecorator={<GenderIcon />}
                    color="neutral"
                    size="lg"
                    sx={{ m: 1 }}
                    variant="soft"
                  >
                    {isLoading ? <Skeleton /> : userData.gender}
                  </Chip>
                  <Chip
                    sx={{ m: 1 }}
                    onClick={() => openModal("faith")}
                    startDecorator={<ReligionIcon />}
                    color="neutral"
                    size="lg"
                    variant="soft"
                  >
                    {isLoading ? <Skeleton /> : userData.faith}
                  </Chip>
                  <Chip
                    sx={{ m: 1 }}
                    onClick={() => openModal("realationshipStatus")}
                    startDecorator={<RelationIcon />}
                    color="neutral"
                    size="lg"
                    variant="soft"
                  >
                    {isLoading ? <Skeleton /> : userData.realationshipStatus}
                  </Chip>
                  <Chip
                    sx={{ m: 1 }}
                    onClick={() => openModal("smoking")}
                    startDecorator={<SmokingRoomsIcon />}
                    color="neutral"
                    size="lg"
                    variant="soft"
                  >
                    {isLoading ? <Skeleton /> : userData.smoking}
                  </Chip>
                  <Chip
                    sx={{ m: 1 }}
                    onClick={() => openModal("drinking")}
                    startDecorator={<WineBar />}
                    color="neutral"
                    size="lg"
                    variant="soft"
                  >
                    {isLoading ? <Skeleton /> : userData.drinking}
                  </Chip>
                </Grid>
                <Grid item xs={12} mr={7}>
                  <Typography variant="caption">My Story</Typography>
                  <TextareaAutosize
                    rowsMin={4}
                    placeholder="Tell us your story..."
                    value={userData.myStory}
                    onChange={handleStoryChange}
                    style={{
                      width: "100%",
                      marginTop: "0.5rem",
                      padding: "1rem",
                    }}
                  />
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
                  <Card   onClick={()=>image0.current}
                    sx={{
                      mr: 2,
                      width: { xs: 100,sm:150, lg: 250 },
                      height: { xs: 100,sm:150, lg: 250 },
                      backgroundImage: `url(${userData.image0})`,
                      bgcolor: "lightgray",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                 
                  >
                    <CardContent>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          ref={image0}
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(e) => handleimage1(e)}
                        />
                        {userData.image0 ? (
                          ""
                        ) : (
                          <AddIcon sx={{ color: "black" }} />
                        )}
                      </IconButton>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      mr: 2,
                      width: { xs: 100,sm:150, lg: 250 },
                      height: { xs: 100,sm:150, lg: 250 },
                      backgroundImage: `url(${userData.image1})`,
                      bgcolor: "lightgray",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    onClick={()=>image1.current}
                  >
                    <CardContent>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          ref={image1}
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(e) => handleimage2(e)}
                        />
                        {userData.image1 ? (
                          ""
                        ) : (
                          <AddIcon sx={{ color: "black" }} />
                        )}
                      </IconButton>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      mr: 2,
                      width: { xs: 100,sm:150, lg: 250 },
                      height: { xs: 100,sm:150, lg: 250 },
                      backgroundImage: `url(${userData.image2})`,
                      bgcolor: "lightgray",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    onClick={()=>image2.current}
                  >
                    <CardContent>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          ref={image2}
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(e) => handleimage3(e)}
                        />
                        {userData.image2 ? (
                          ""
                        ) : (
                          <AddIcon sx={{ color: "black" }} />
                        )}
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sx={{ mx: "4", my: "3" }} xs={12}>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={handleSubmit}
                  >
                    Submit Changes
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: { xs: "", lg: "absolute" },
            top: { xs: "", lg: "50%" },
            left: { xs: "", lg: "50%" },
            transform: { xs: "", lg: "translate(-50%, -50%)" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {renderModal()}
        </Box>
      </Modal>
    </>
  );
}

export default EditProfile;
