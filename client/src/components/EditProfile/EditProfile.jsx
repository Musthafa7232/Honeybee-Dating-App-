import { Grid } from "@mui/material";
import { useState } from "react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { SetUserData } from "../../features/users/UserReducer";
import ModalEditUser from "./ModalEditUser";
import EditProfileCard from "./EditProfileCard";
import { editUserDataApi } from "../../services/api";
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

  const openModal = (data) => {
    setOption(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("fullName", userData.fullName);
    formData.append("email", userData.email);
    formData.append("birthday", userData.birthday);
    formData.append("age", userData.age);
    formData.append("gender", userData.gender);
    formData.append("location", userData.location);
    formData.append("faith", userData.faith);
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
    if (userData.image0) {
      if (image0.current.files.length) {
        formData.append(
          "image0",
          image0.current.files[0],
          image0.current.files[0].name
        );
      }
    }

    if (userData.image1) {
      if (image1.current.files.length) {
        formData.append(
          "image1",
          image1.current.files[0],
          image1.current.files[0].name
        );
      }
    }
    if (userData.image2) {
      if (image2.current.files.length) {
        formData.append(
          "image2",
          image2.current.files[0],
          image2.current.files[0].name
        );
      }
    }

    for (let i of formData.entries()) {
      console.log(i);
    }
    try {
      const { data } = await editUserDataApi(formData);
      dispatch(SetUserData(data));
      setLoader(false);
      setEdit(false);
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };
  useEffect(() => {
    console.log(image0.current.files);
  }, [image0, image1, image2]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ my: { lg: 5 }, minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={10}>
          <EditProfileCard
            userData={userData}
            setUserData={setUserData}
            error={error}
            coverPicREF={coverPicREF}
            profilePicREF={profilePicREF}
            image0={image0}
            image1={image1}
            image2={image2}
            openModal={openModal}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            loader={loader}
            setLoader={setLoader}
          />
        </Grid>
        <ModalEditUser
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          option={option}
          setModalOpen={setModalOpen}
          setUserData={setUserData}
        />
      </Grid>
    </>
  );
}

export default EditProfile;
