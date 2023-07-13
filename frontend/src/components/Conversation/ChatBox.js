import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import Messages from "../Home/Messages"
import { getConversation, getGroupMessage } from "../../service/api"
import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../context/AccountProvider"

const ChatBox=()=>{
    const {person,account,groups,selectGroup}=useContext(AccountContext)
    const [conversation,setConversation]=useState({})
    useEffect(()=>{
        const getConversationDetails=async()=>{
        
          if(selectGroup){
                console.log(groups)
                console.log('Hii')
                setConversation(groups)
          }else{
          let details=await getConversation({senderId:account.sub,receiverId:person.sub})
          console.log(details.data)
          setConversation(details.data)
        
          }
          
} 
getConversationDetails()
},[person.sub,selectGroup])
   
   
    return(
        <Box  style={{height:'75%'}}>
            <ChatHeader person={person}/>
          <Messages person={person} conversation={conversation} />
            
        </Box>
    )
}
export default ChatBox