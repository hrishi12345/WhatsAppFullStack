import express from 'express'
import cors from'cors'
import Connection from './util/mongoDb.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import UserRoutes from './routes/user.js'
import ConversationRouter from './routes/conversation.js'
import MessageRoutes  from './routes/message.js'
import FileRoutes from './routes/file.js'
import GroupRoutes from './routes/group.js'
const app=express()
dotenv.config()
//mondo config
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD
Connection()
//body-parser
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
//routes
app.use('/user',UserRoutes)
app.use('/conversation',ConversationRouter)
app.use('/message',MessageRoutes)
app.use('/file',FileRoutes)
app.use('/group',GroupRoutes)
app.listen(3004,()=>{
    console.log('Server started')
})