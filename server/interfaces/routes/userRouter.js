import express from "express";
const router = express.Router();
router.use(express.urlencoded({ extended: false }));

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
} from "../controller/userController.js";

import {
  createNewUser,
  findUserWithPhone,
  findUserWithEmail,
  findUserWithId,
  UpdateUser,
  showUsers,
  likeUserAndMatch,
  dislikeAUser,
} from "../../usecases/UserInteractor.js";

import { SendPhoneOtp, VerifyPhoneOtp } from "../../usecases/OtpInteractor.js";

import {
  VerifyJwtToken,
  createJwtToken,
} from "../../usecases/AuthInteractor.js";

import {
  getGoogleOauthToken,
  getGoogleUser,
} from "../../usecases/GoogleInteractor.js";

import userModel from "../../domain/model/userModel.js";
import chatModel from "../../domain/model/chatModel.js";
import matchModel from "../../domain/model/matchesModel.js";
import {
  createUserToken,
  verifyUserToken,
} from "../../Frameworks/utils/Jwt.js";
import { checkOtp, sendOtp } from "../../Frameworks/utils/Twilio.js";

import { upload } from "../../Frameworks/utils/Multer.js";
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
import { getMatchedUsers } from "../../usecases/MatchesInteractor.js";
router.post("/phone", phoneOtp(SendPhoneOtp, sendOtp));
router.post(
  "/createAccount",
  userDetails(createNewUser, createJwtToken, userModel, createUserToken)
);
router.post(
  "/googleLogin",
  googleLogin(findUserWithEmail, userModel, createUserToken, createJwtToken)
);
router.get(
  "/userData",
  userData(VerifyJwtToken, verifyUserToken, findUserWithId, userModel)
);
router.get(
  "/oAuth/google",
  googleData(userModel, findUserWithEmail, getGoogleOauthToken, getGoogleUser)
);
router.patch(
  "/userEdit",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "coverPic", maxCount: 1 },
    { name: "image0", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  editUser(userModel, UpdateUser, VerifyJwtToken, verifyUserToken)
);

router.get(
  "/discover",
  discoverUsers(VerifyJwtToken, verifyUserToken, userModel, showUsers)
);
router.get(
  "/matches",
  matchedUsers(
    VerifyJwtToken,
    verifyUserToken,
    getMatchedUsers,
    matchModel,
    userModel
  )
);
router.put(
  "/likeUser",
  likeUser(
    userModel,
    matchModel,
    VerifyJwtToken,
    verifyUserToken,
    likeUserAndMatch
  )
);
router.put(
  "/dislikeUser",
  dislikeUser(userModel, VerifyJwtToken, verifyUserToken, dislikeAUser)
);
export default router;
