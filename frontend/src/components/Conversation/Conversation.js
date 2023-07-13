import { useContext, useEffect, useState } from "react";
import { getGroups, getUsers } from "../../service/api";
import { Box, styled, Divider } from "@mui/material";
import SingleChat from "./SingleChat";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      const groups = await getGroups();
      const filteredData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      const mergedData = [...filteredData, ...groups];
      setUsers(mergedData);
    };

    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
      console.log('Activeusers:',users)
    });
  }, [account]);

  return (
    <Component>
      {users.map((user) => {
        if (user.sub !== account.sub) {
            
          return (
            <>
              {user.hasOwnProperty("groupName") ? (
    
                <SingleChat user={user} />
              ) : (
                <SingleChat user={user} />
              )}
              <StyleDivider />
            </>
          );
        }
        return null;
      })}
    </Component>
  );
};

export default Conversations;