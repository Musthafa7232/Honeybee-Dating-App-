import express from "express";
const router = express.Router();

import {
  googleData,
  googleLogin,
  phoneOtp,
  userData,
  userDetails,
  verifyOtp,
  editUser,
  discoverUsers,
  likeUser,
  dislikeUser,
  matchedUsers,
  getAllLikedUsers,
} from "../../controller/userController.js";

import {
  createNewUser,
  findUserWithPhone,
  findUserWithEmail,
  findUserWithId,
  UpdateUser,
  showUsers,
  likeUserAndMatch,
  dislikeAUser,
  showAllLikedUsers,
} from "../../usecases/UserInteractor.js";

import { SendPhoneOtp, VerifyPhoneOtp } from "../../usecases/OtpInteractor.js";
import {
  VerifyJwtToken,
  createJwtToken,
} from "../../usecases/AuthInteractor.js";
import {
  createUserToken,
  verifyUserToken,
} from "../../Frameworks/utils/Jwt.js";
import {
  getGoogleOauthToken,
  getGoogleUser,
} from "../../usecases/GoogleInteractor.js";
import userModel from "../../domain/model/userModel.js";
import matchModel from "../../domain/model/matchesModel.js";
import { checkOtp, sendOtp } from "../../Frameworks/utils/Twilio.js";
import { upload } from "../../Frameworks/utils/Multer.js";
import { getMatchedUsers } from "../../usecases/MatchesInteractor.js";

//route Handlers
router.post("/phone", phoneOtp(SendPhoneOtp, sendOtp));

router.get(
  "/oAuth/google",
  googleData(userModel, findUserWithEmail, getGoogleOauthToken, getGoogleUser)
);

router.post(
  "/verifyOtp",
  verifyOtp(
    VerifyPhoneOtp,
    checkOtp,
    userModel,
    findUserWithPhone,
    createJwtToken,
    createUserToken
  )
);

router.post(
  "/createAccount",
  userDetails(createNewUser, createJwtToken, userModel, createUserToken)
);

router.post(
  "/googleLogin",
  googleLogin(findUserWithEmail, userModel, createUserToken, createJwtToken)
);

//verifyUserTocken

router.use(VerifyJwtToken(verifyUserToken));

router.get("/userData", userData(findUserWithId, userModel));

router.patch(
  "/userEdit",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "coverPic", maxCount: 1 },
    { name: "image0", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  editUser(userModel, UpdateUser)
);

router.get("/discover", discoverUsers(userModel, showUsers));
router.get("/matches", matchedUsers(getMatchedUsers, matchModel, userModel));
router.put("/likeUser", likeUser(userModel, matchModel, likeUserAndMatch));
router.put("/dislikeUser", dislikeUser(userModel, dislikeAUser));

router.post("/allLikedUsers", getAllLikedUsers(showAllLikedUsers, userModel));
export default router;
