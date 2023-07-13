import Message from "../models/Message.js"
import Conversation from "../models/conversation.js"
export const newMessage=async (request,response)=>{
    try{
        const newMessage=new Message(request.body)
        console.log(request.body)
        await newMessage.save()
        await Conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text})
        return response.status(200).json({message:'Message send Successfully'})
    }catch(error){
        return response.status(500).json(error.message)

    }
}
export const getMessages=async (request,response)=>{
    try{
    const messages=await Message.find({conversationId:request.params.id})
    console.log(messages)
    return response.status(200).json(messages)
}catch(error){
    return response.status(500).json(error.message)
}

}