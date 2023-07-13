import User from "../models/user.js";


export const addUser=async (request,response)=>{
    try{
        console.log(request.body)
        const sub=request.body.sub
        let exist=await User.findOne({sub:sub})
        if(exist){
            response.status(200).json({msg:'User already exist'})
            return
        }
        const newUser=new User(request.body)
        console.log(newUser)
        await newUser.save()
        return response.status(200).json(newUser)
    }catch(error){
        return response.status(500).json(error.message)
         
    }

}
export const getUsers=async (req,res)=>{
    try{
        const users=await User.find()
        
        return res.status(200).json(users)
    }catch(error){
        return res.status(500).json(error.message)
    }
}