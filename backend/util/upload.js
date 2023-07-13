//our data is in binary format
import dotenv from 'dotenv'
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
dotenv.config()
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD


const url=`mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.fibw6ej.mongodb.net/`
    


const storage=new GridFsStorage({
    url:url,
    options:{useUnifiedTopology:true,useNewUrlParser:true},
    file:(request,file)=>{
        const match=["image/png","image/png"]
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName:'photos',
            filename:`${Date.now()}-file-${file.originalname}`
        }
    }

})
export default multer({storage})