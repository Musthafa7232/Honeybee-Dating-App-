import express from "express";
const router = express.Router();

import chatModel from "../../domain/model/chatModel.js";
import {addMessage,getMessage,getLastMessage} from '../../controller/chatController.js'
import {addNewMsg,getAllChats} from '../../usecases/ChatInteractor.js'
router.post('/addmsg',addMessage(chatModel,addNewMsg))
router.post('/getmsg',getMessage(chatModel,getAllChats))
router.post('/lastmsg',getLastMessage(chatModel))


export default router;