import { Drawer, Box, Typography,styled } from "@mui/material"
import GroupInfo from "./GroupCreate";


const Text = styled(Typography)`
    font-size: 18px;
`
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;
const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}
const Groups=({open,openGroup})=>{
    const handleClose = () => {
        openGroup(false);
    };
    
    return(
       
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
        >
        <Header>
            <Text>Create Group</Text>
        </Header>
        
            <GroupInfo />
        
        </Drawer>
       
    )
}
export default Groups