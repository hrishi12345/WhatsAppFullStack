import { Box ,styled} from "@mui/material"
import { whatsappBack } from "../../constants/data"
import ChatFooter from "../Conversation/ChatFooter"
import { useContext, useEffect, useRef, useState } from "react"
import { AccountContext } from "../../context/AccountProvider"
import { getGroupMessage, getMessages, newMessage, sendGroupMessage } from "../../service/api"
import SingleMessage from "../Conversation/SingleMessage"
const Wrapper=styled(Box)`
  background-image:url(${whatsappBack});
  background-size:50%;
`
const Component=styled(Box)`
height:80vh;
overflow-y:scroll;
`
const Container = styled(Box)`
    padding: 1px 80px;
`;
const Messages=({person,conversation})=>{
    const [value,setValue]=useState('')
    const [messages,setMessages]=useState([])
    const {account,socket,setNewMessageFlag,newMessageFlag}=useContext(AccountContext)
    const [file,setFile]=useState()
    const [image,setImage]=useState('')
    const [incomingMessage,setIncomingMessage]=useState(null)
    const scrollRef=useRef()

    useEffect(()=>{
        socket.current.on('getMessage',data=>{
           setIncomingMessage({
            ...data,
            createdAt:Date.now()
           })
        },[]) 
    })
useEffect(()=>{
    const getMessageDetails=async()=>{
        if(conversation.hasOwnProperty('groupName')){
            
            let data =await getGroupMessage(conversation?._id)
            console.log(data)
            setMessages(data)
        }else{let data=await getMessages(conversation?._id)
       
        setMessages(data)
        }
        
    }
    getMessageDetails()
},[person._id,conversation?._id,newMessageFlag])

   useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:'smooth'})
   },[messages])
   const receiverId = conversation?.members?.find(member => member !== account.sub);

    const sendText=async (e)=>{
        console.log(conversation)
        const code=e.keyCode || e.which
        let message
        if(code===13){
            if(conversation.hasOwnProperty('groupName')){
                console.log(value)
                const data={
                    groupId:conversation._id,
                    senderId:account.sub,
                    message:value
                }
                  console.log(data)
                await sendGroupMessage(data)
                    
            }else{
                console.log('UserMessage')
                if(!file){
                message={
                    senderId:account.sub,
                    receiverId:receiverId,
                    conversationId:conversation._id,
                    type:'text',
                    text:value
                  }
                  socket.current.emit('sendMessage',message)
              await newMessage(message)
            }else{
              message={
                senderId:account.sub,
                receiverId:receiverId,
                conversationId:conversation._id,
                type:'file',
                text:image
              }
              socket.current.emit('sendMessage',message)
              await newMessage(message)
            
            }
              
              setValue('')
              setImage('')
              setFile('')
              setNewMessageFlag(prev=>!prev)
        }}
        

        
    }
    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId)&&
        setMessages(prev=>[...prev,incomingMessage])
    },[incomingMessage, conversation])
    console.log(conversation)
    return(
        
        <Wrapper>
            
         <Component>
            {messages && messages.map(message=>{
                return (
                <Container ref={scrollRef}>
                <SingleMessage message={message}/>
                </Container>
                )
            })}
         </Component>
         <ChatFooter sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage} />
        </Wrapper>
    )
}
export default Messages