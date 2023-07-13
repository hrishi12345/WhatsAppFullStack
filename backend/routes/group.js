import express from 'express'
import { createGroup, getGroups, getMessages, sendmessage } from '../controller/group-controller.js'

const router=express.Router()
router.post('/create',createGroup)
router.get('/get',getGroups)
router.post('/sendmessage',sendmessage)
router.get('/getmessage/:id',getMessages)
export default router