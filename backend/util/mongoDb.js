import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD
console.log(USERNAME,PASSWORD)
const Connection=async()=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.fibw6ej.mongodb.net/`
    console.log(URL)
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true})
        console.log('Database successful')
    }catch(error){
        console.log('ERROR WHILE CONNECTING')
        console.log(error.message)
    }
}

export default Connection;