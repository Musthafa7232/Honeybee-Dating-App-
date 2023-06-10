import express from 'express'
import {userDetails,phoneOtp,verifyOtp,userData} from '../controller/userControls.js'
const router =express.Router()
import {verifyUserToken} from '../utils/jwt.js'


router.post('/verifyOtp',verifyOtp)
router.post('/phone',phoneOtp)

router.post('/createAccount',userDetails)
router.get('/userData',verifyUserToken,userData)

export default router