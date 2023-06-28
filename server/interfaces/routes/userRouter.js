import express from 'express';
const router = express.Router();
import {
googleData,
googleLogin,
phoneOtp,
userData,
userDetails,
verifyOtp
} from '../Controller/UserController.js'

import {
    createNewUser,
    findUserWithPhone,
    findUserWithEmail,
    findUserWithId,
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

  import userModel from '../../domain/model/userModel.js'
  import {createUserToken,verifyUserToken} from '../../Frameworks/utils/Jwt.js'
  import {checkOtp,sendOtp} from '../../Frameworks/utils/Twilio.js'

router.post('/verifyOtp', verifyOtp(VerifyPhoneOtp,checkOtp,userModel,findUserWithPhone,createJwtToken,createUserToken));
router.post('/phone', phoneOtp(SendPhoneOtp,sendOtp));
router.post('/createAccount', userDetails(createNewUser,createJwtToken,userModel,createUserToken));
router.post('/googleLogin', googleLogin(findUserWithEmail,userModel,createUserToken,createJwtToken));
router.get('/userData', userData(VerifyJwtToken,verifyUserToken,findUserWithId,userModel));
router.get('/oAuth/google', googleData(userModel,findUserWithEmail,getGoogleOauthToken,getGoogleUser));

export default router;

