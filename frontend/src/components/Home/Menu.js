import Header from "./Header"
import { Box } from "@mui/material"
import Search from "./Search"
import Conversations from "../Conversation/Conversation"
import { useState } from "react"
const Menu=()=>{
    const [text,setText]=useState('')
    return(
        <Box>
            <Header />
            <Search  setText={setText} />
            <Conversations text={text}/>
        </Box>
    )
}
export default Menu