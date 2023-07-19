import axios from "../Axios";

const headers = {
  headers: {
    "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
  },
};

const formDataHeaders = {
  headers: {
    "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
    "Content-Type": "multipart/form-data",
  },
};

export const phoneNumberApi = (data) => axios.post("/phone", data);

export const otpApi = (data) => axios.post("/verifyOtp", data);

export const googleLoginApi = (data) => axios.post("/googleLogin", data);

export const createAccountApi = (userData) =>
  axios.post("/createAccount", userData);

export const fetchLocationApi = (latitude, longitude) => {
  const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  fetch(geoApiUrl);
};

export const userDataApi = () => axios.get("/userData", headers);

export const editUserDataApi = (formData) =>
  axios.patch("/userEdit", formData, formDataHeaders);

export const DiscoverUsersApi = () => axios.get("/discover", headers);

export const likeUserApi = (data) => axios.put("/likeUser", data, headers);

export const disLikeUserApi = (data) =>
  axios.put("/dislikeUser", data, headers);

export const ShowMatchesApi = () => axios.get("/matches", headers);

export const showAllLikedUsersApi = () =>
  axios.post("/allLikedUsers", { data: "hi" }, headers);

export const getAllmsgsApi = (data) =>
  axios.post("/chat/getmsg", data, headers);

export const addNewMSgApi = (data) => axios.post("/chat/addmsg", data, headers);

export const getLastMsgsApi = (data) =>
  axios.post("/chat/lastmsg", data, headers);

export const ReadMsgsApi = (data) =>
  axios.post("/chat/markRead", data, headers);
