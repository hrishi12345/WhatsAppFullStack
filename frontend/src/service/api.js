import axios from "axios";
const url='http://localhost:3004'
export const addUser=async (data)=>{
    try{
        const response =await axios.post(`${url}/user/adduser`,data)
        return response
    }catch(error){
        console.log(error.message)
    }
}
export const getUsers=async ()=>{
    try{
        let response=await axios.get(`${url}/user/getuser`)
        console.log(response)
        return response.data
    }catch(error){
        console.log(error.message)
    }
}
export const setConversation=async(data)=>{
    try{
         await axios.post(`${url}/conversation/add`,data)
    }catch(error){
        console.log('Error whille setting api',error.message)
    }
}

export const getConversation=async(data)=>{
    try{
         const response =await axios.post(`${url}/conversation/get`,data)
         return response
    }catch(error){
        console.log('Error whille setting api',error.message)
    }
}
export const newMessage=async(data)=>{
    try{
         await axios.post(`${url}/message/add`,data)
    }catch(error){
        console.log('Error while calling newmessage Api',error.message)
    }
}

export const getMessages=async(id)=>{
    try{
      let response =await axios.get(`${url}/message/get/${id}`)
      return response.data
    }catch(error){
        console.log('Error while getting data from server')
    }
}

export const uploadFile=async(data)=>{
    try{

        return await axios.post(`${url}/file/upload`,data)
    }catch(error){
        console.log('error while sending data')
    }
}

export const createGroup=async(data)=>{
    try{
        
       const response= await axios.post(`${url}/group/create`,data)
       console.log(response)
    }catch(error){
        console.log('error while sending the data to backend :',error.message)
    }
}

export const getGroups=async()=>{
    try{
      const response=await axios.get(`${url}/group/get`)
      console.log(response.data)
      return response.data
    }catch(error){
        console.log('Error while getting the data')
    }
}

export const getGroupMessage=async(id)=>{
    try{
        console.log(id)
        const response=await axios.get(`${url}/group/getmessage/${id}`)
        console.log(response.data)
        return response.data
    }catch(error){
        console.log('Error while getting the mesage')
    }
}
export const sendGroupMessage=async(data)=>{
    try{
        console.log(data)
        const response=await axios.post(`${url}/group/sendmessage`,data)
        console.log(response.data)
        return response.data
    }catch(error){
        console.log('Error while sending message ')
    }
}