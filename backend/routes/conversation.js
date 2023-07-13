import express from "express";
import { getConversation, newConversation } from "../controller/conversation-controller.js";

const router=express.Router()
router.post('/add',newConversation)
router.post('/get',getConversation)
export default router