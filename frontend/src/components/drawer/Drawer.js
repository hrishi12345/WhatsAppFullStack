import { styled, Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState } from 'react';
import Groups from '../drawer/Groups';
//components


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

const Component = styled(Box)`
  background: #ededed;
  
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Text = styled(Typography)`
    font-size: 18px;
`

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const InfoDrawer = ({ open, setOpen, profile }) => {
    const [groupDrawer,openGroupDrawer]=useState(false)
    const handleClose = () => {
        setOpen(false);
    };
    const toggleDrawerGroup=()=>{
        openGroupDrawer(true)
    }

    return (
        <>
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>New chat</Text>
            </Header>
            <Component onClick={toggleDrawerGroup}>
                <GroupsIcon />
                <Typography >Create Groups</Typography>
            </Component>
        </Drawer>
        <Groups open={groupDrawer} openGroup={openGroupDrawer}/>
        </>
    );
}

export default InfoDrawer;