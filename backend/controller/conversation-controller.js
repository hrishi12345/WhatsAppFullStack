import Conversation from "../models/conversation.js";

export const newConversation=async(request,response)=>{
   try{ 
    
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;
        console.log(senderId,receiverId)
        const exist=await Conversation.findOne({members:{$all:[receiverId,senderId]}})
        if(exist){
            return response.status(200).json('Conversation already exist');

        }
        const newConversation=new Conversation({
            members:[senderId,receiverId]
        })
        await newConversation.save()
        return response.status(200).json('Conversation saved successfully')
   }catch(error){
           return response.status(500).json(error.message)
   } 
}

export const getConversation=async (request,response)=>{
 try{
    const senderId=request.body.senderId;
    const receiverId=request.body.receiverId;
     let conversation=await Conversation.findOne({members:{$all:[receiverId,senderId]}})
     return response.status(200).json(conversation)
 }catch(error){
    console.log(error.message)
    return response.status(500).json(error.message)
 }
}