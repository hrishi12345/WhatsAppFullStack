import GroupMessage from "../models/groupMessages.js"
import Group from "../models/groupSchema.js"
export const createGroup=async(request,response)=>{
       try{
        const {groupName,admin}=request.body
        console.log(groupName,admin)
        const newGroup=new Group({groupName,admin})
        console.log(newGroup)
        await newGroup.save()
        return response.status(200).json(newGroup)
    
        
       }catch(error){
        return response.status(404).json(error.message)
       
       }
}

export const getGroups=async(request,response)=>{
    try{
          const data=await Group.find()
          console.log(data)
          return response.status(201).json(data)
    }catch(error){
        return response.status(404).json('Error while getting data from database')
    }
}

export const sendmessage=async (request,response)=>{
    try{
           const {groupId,senderId,message}=request.body
           console.log(groupId,senderId,message)
           const data=new GroupMessage({groupId,senderId,message})
           await data.save()
           return response.status(200).json(data)
           
    }catch(error){
        return response.status(400).json('Error in sending message to database')
    }
}

export const getMessages=async(request,response)=>{
    try{
        console.log('Hii')
        console.log(request.params.id)
     const data= await GroupMessage.find({groupId:request.params.id})
     console.log(data)
     return response.status(201).json(data)
    }catch(error){
        return response.status(403).json('Error while getting data from database')
    }
}