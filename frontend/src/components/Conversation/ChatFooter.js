import styled from "@emotion/styled"
import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material"
import { Box, InputBase } from "@mui/material"
import { useEffect, useState } from "react";
import { uploadFile } from "../../service/api";


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg);'
`;

const ChatFooter=({sendText,setValue,value,file,setFile,setImage})=>{
    
    useEffect(()=>{
    const getImage=async ()=>{
        if(file){
            const data=new FormData();//we need to send images in chunks
            data.append("name",file.name)
            data.append("file",file)

            let response=await uploadFile(data)
            setImage(response.data)
        }
    }
    getImage()

    },[file])
    const onFileChange=(event)=>{
        setFile(event.target.files[0])
        setValue(event.target.files[0].name)
    }
    return(
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor="fileInput">
            <ClipIcon />
            </label>
           
            <input
              type="file"
              id="fileInput"
              style={{display:'none'}}
              onChange={onFileChange}
              />
            <Search>
                <InputField 
                placeholder="Type a message"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={(e)=>sendText(e)}//which key is pressed
                value={value}
                />
            </Search>
            <Mic />
        </Container>
    )
}
export default ChatFooter