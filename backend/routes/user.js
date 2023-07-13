import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
const router=express.Router()
router.post('/adduser',addUser)
router.get('/getuser',getUsers)
export default router