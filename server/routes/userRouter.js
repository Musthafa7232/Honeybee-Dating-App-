import express from 'express'
import {userDetails,phoneOtp,verifyOtp,userData,googleData,googleLogin} from '../controller/userControls.js'
const router =express.Router()
import {verifyUserToken} from '../utils/jwt.js'


router.post('/verifyOtp',verifyOtp)
router.post('/phone',phoneOtp)

router.post('/createAccount',userDetails)
router.post('/googleLogin',googleLogin)
router.get('/userData',verifyUserToken,userData)
router.get('/oAuth/google',googleData)

export default router