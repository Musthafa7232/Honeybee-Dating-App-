import express from 'express'
import {userDetails} from '../controller/userControls.js'
const router =express.Router()

router.post('/createAccount',userDetails)


export default router