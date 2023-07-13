import styled from "@emotion/styled"
import { Box} from "@mui/material"
import { useContext, useState } from "react"
import { AccountContext } from "../../context/AccountProvider"
import InfoDrawer from '../drawer/Drawer'
import { Chat as MessageIcon } from '@mui/icons-material';
const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Header=()=>{
    const [openDrawer,setOpenDrawer]=useState(false)
    const {account}=useContext(AccountContext)
    const toggleDrawer=()=>{
        setOpenDrawer(true)
    }
    return(
        <>
        <Component>
            <Image src={account.picture} alt="dp"></Image>
                <Wrapper>
                    <MessageIcon onClick={toggleDrawer}/>
                </Wrapper>
               
            
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}
export default Header