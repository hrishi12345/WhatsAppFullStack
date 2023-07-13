
import React, { useContext} from 'react';

import { AppBar, Box, Dialog, Toolbar, styled } from '@mui/material';
import Menu from './Menu';

import EmptyChat from './EmptyChat';

import ChatBox from '../Conversation/ChatBox';

import { AccountContext } from '../../context/AccountProvider';

const MainComponent = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;
const dialogStyle = {
  height: '95%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  backgroundColor: 'none',
};
const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
function Home() {
 
  

  const {person}=useContext(AccountContext)
  
  return (
    <MainComponent>
    <Header>
        <Toolbar></Toolbar>
        </Header>
    <Dialog
    open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    >
        <Component>
            <LeftComponent>
                <Menu />
      
      
      </LeftComponent>
      <RightComponent>
        
        {Object.keys(person).length ? <ChatBox />:<EmptyChat />}
        
      </RightComponent>
      </Component>
    </Dialog>
    </MainComponent>
  );
}

export default Home;
