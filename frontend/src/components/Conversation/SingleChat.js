import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import { AccountContext } from '../../context/AccountProvider';
import { getConversation, setConversation } from '../../service/api';

import { emptyProfilePicture } from '../../constants/data';
import { formatDate } from '../../utils/common-utils';

const Component = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled('img')({
  width: 50,
  height: 50,
  objectFit: 'cover',
  borderRadius: '50%',
  padding: '0 14px',
});

const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  display: block;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
`;

const SingleChat = ({ user}) => {
  const url = user.picture || emptyProfilePicture;
  const { setPerson, account, newMessageFlag,setGroups,setSelectGroup } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);

    if (user.hasOwnProperty('groupName')) {
      // Group conversation
      // Fetch group conversation data from backend
      

      await setGroups(user);
    } else {
      // User-to-user conversation
      // Fetch user-to-user conversation data from backend
      await setConversation({ senderId: account.sub, receiverId: user.sub });
    }
  };

  const handleClick = () => {
    if (user.hasOwnProperty('groupName')) {
      // Handle group conversation
      // You can add your custom logic here
      setSelectGroup(true)
      console.log('Group Conversation:', user);
    } else {
      // Handle user-to-user conversation
      // You can add your custom logic here
      setSelectGroup(false)
      console.log('User-to-User Conversation:', user);
    }

    getUser();
  };
  console.log(user)
  
  return (
    <Component onClick={handleClick}>
      <Box>
        <Image src={url} alt="profile" />
      </Box>
      <Box style={{ width: '100%' }}>
        <Container>
          <Typography>{user.groupName ||user.name}</Typography>
          {message?.text && <Timestamp>{formatDate(message?.timestamp)}</Timestamp>}
        </Container>
        <Box>
          <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
        </Box>
      </Box>
    </Component>
  );
};

export default SingleChat;
