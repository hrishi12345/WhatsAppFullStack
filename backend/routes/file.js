import express from 'express'
import upload from '../util/upload.js'
import { getImage, uploadFile } from '../controller/file-controller.js'
const router=express.Router()

router.post('/upload',upload.single("file"),uploadFile)
router.get('/:filename',getImage)
export default router