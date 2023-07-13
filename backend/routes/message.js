import express from 'express'
import { getMessages, newMessage } from '../controller/message-controller.js'
const router=express.Router()
router.post('/add',newMessage)
router.get('/get/:id',getMessages)
export default router